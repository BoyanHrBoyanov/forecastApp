import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, useLocation } from "react-router-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { paths } from "../../constants/paths";
import { dayIconHandler } from "../../handlers/weatherHandler";
import { multiArrayModifier } from "../../handlers/longArraysHandler";


export const DailyForecast = ({ langPicker }) => {
    const [currentData, setCurrentData] = useState({});
    const [hourlyData, setHourlyData] = useState({});
    const [dailyData, setDailyData] = useState({});
    const [loading, setLoading] = useState(true);
    const { state } = useLocation();

    useEffect(() => {
        setLoading(true);
        fetch(paths.weather(state.lat, state.lon))
            .then(response => response.json())
            .then(data => {
                setCurrentData(({
                    name: state.name,
                    elevation: data.elevation,
                    current_weather: data.current_weather
                }));
                setHourlyData(data.hourly);
                setDailyData(data.daily);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
            });
    }, []);

    function iconHandler(index) {
        const [cloudsArr] = multiArrayModifier([hourlyData.cloudcover]);
        return dayIconHandler(cloudsArr[index]);

    }

    return (
        <>
            {loading 
            ? <ActivityIndicator size="large" style={styles.activityIndicator} />
            : currentData ?
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        {currentData.name}{`, ${currentData.elevation}${langPicker().m}.`}
                    </Text>
                </View> 
                : null}
            
            <ScrollView style={styles.container}>
                {Object.keys(dailyData).length ? dailyData.time.map((x, i) =>
                    <Link to="/details"
                        key={x}
                        state={{ dailyData, hourlyData, currentData, dataIndex: i }}
                        activeOpacity={0.3}
                        underlayColor="#f2eee6"
                        style={styles.containerDaily}>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.day}>
                                    {langPicker().days[new Date(dailyData.time[i]).getDay()]}
                                </Text>
                                <Text>
                                    {dailyData.time[i].split('-').reverse().join('/')}
                                </Text>
                            </View>
                            <View style={[styles.column, styles.icon]}>
                                {hourlyData ? iconHandler(i) : null}
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.degrees}>
                                    {(dailyData.temperature_2m_max[i]).toFixed(0)}
                                    <MaterialCommunityIcons name={'temperature-celsius'} size={18} />
                                </Text>
                                <Text style={styles.degrees}>
                                    {(dailyData.temperature_2m_min[i]).toFixed(0)}
                                    <MaterialCommunityIcons name={'temperature-celsius'} size={18} />
                                </Text>
                            </View>
                            <View style={[styles.column, styles.rightZone,
                                        {position: 'absolute', right: 0, top: 0}]}>
                                <Text>
                                    <Entypo name={'drop'} size={18} /> {`${dailyData.rain_sum[i].toFixed(0)} ${langPicker().mm}`}
                                    <MaterialCommunityIcons name={'slash-forward'} size={18}/>
                                    {`${dailyData.precipitation_probability_max[i]} %`}
                                    <MaterialCommunityIcons name={'slash-forward'} size={18}/>
                                    {`${dailyData.precipitation_hours[i]}${langPicker().h}`}
                                </Text>
                                <Text style={{position: 'absolute', right: 0, top: 40}}>
                                    <View style={{transform: [{rotate: `${dailyData.winddirection_10m_dominant[i]}deg`}]}}>
                                        <Entypo name={'arrow-long-up'} size={18} color={'lightyellow'} />
                                    </View>
                                    {` ${dailyData.windspeed_10m_max[i].toFixed(0)} ${langPicker().kmh}`}
                                </Text>
                            </View>
                        </View>
                    </Link>)
                    : null}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        backgroundColor: 'oldlace'
    },
    headerText: {
        fontSize: 18,
        alignSelf: 'center'
    },
    activityIndicator: {
        backgroundColor: 'oldlace'
    },
    icon: {
        paddingLeft: 20,
        width: 70
    },
    degrees: {
        fontSize: 17,
        width: 60
    },
    rightZone:{
        width: 160
    },
    container: {
        backgroundColor: 'oldlace'
    },
    containerDaily: {
        height: 80,
        paddingRight: 10,
        backgroundColor: 'skyblue',
        borderBottomWidth: 3
    },
    day: {
        alignSelf: 'center',
        fontSize: 17
    },
    column: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingTop: 10
    },
    row: {
        flexDirection: 'row'
    },
    footer: {
        backgroundColor: 'oldlace',
        height: 21
    }
})