import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link, useLocation } from "react-router-native";

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { paths } from "../../constants/paths";
import { dayIconHandler } from "../../handlers/weatherHandler";


export const DailyForecast = ({ langPicker }) => {
    const [currentData, setCurrentData] = useState({});
    const [hourlyData, setHourlyData] = useState({});
    const [dailyData, setDailyData] = useState({});
    const [loading, setLoading] = useState(true);
    const { state } = useLocation()

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
        let cloudsArr = dayIconHandler(hourlyData);

        if (cloudsArr[index].status === 'clear sky') {
            return <Ionicons name={'sunny'} size={32} />
        } else if (cloudsArr[index].status === 'sun and clouds') {
            return <FontAwesome5 name={'cloud-sun'} size={32} />
        } else {
            return <FontAwesome5 name={'cloud'} size={30} />
        }
    }

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {currentData.name}, {currentData.elevation}{langPicker().m}
                </Text>
            </View>
            <View style={styles.container}>
                {loading ? <ActivityIndicator size="large" /> : null}
                {Object.keys(dailyData).length ? dailyData.time.map((x, i) =>
                    <Link to="/details"
                        key={x}
                        state={{ dailyData, hourlyData, i }}
                        activeOpacity={0.3}
                        underlayColor="#f2eee6"
                        style={styles.containerDaily}>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.day}>
                                    {langPicker().days[new Date(dailyData.time[i]).getDay()]}
                                </Text>
                                <Text>
                                    {/* {dailyData.time[i].split('-').slice(1).join('-')} */}
                                    {dailyData.time[i].split('-').join('/')}
                                </Text>
                            </View>
                            <View style={styles.column}>
                                {hourlyData ? iconHandler(i) : null}
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.degrees}>
                                    {(dailyData.temperature_2m_max[i]).toFixed(0)}
                                    <MaterialCommunityIcons name={'temperature-celsius'} size={15} />
                                </Text>
                                <Text style={styles.degrees}>
                                    {(dailyData.temperature_2m_min[i]).toFixed(0)}
                                    <MaterialCommunityIcons name={'temperature-celsius'} size={15} />
                                </Text>
                            </View>
                            <View style={styles.column}>
                                <Text>
                                    <Entypo name={'drop'} /> {dailyData.rain_sum[i]} {langPicker().mm}
                                </Text>
                                <Text>
                                    {langPicker().rainProb} - {dailyData.precipitation_probability_max[i]} %
                                </Text>
                            </View>
                        </View>
                    </Link>)
                    : null}
            </View>
            <TouchableOpacity style={styles.footer}>
                <Link to="/">
                    <Text>Back</Text>
                </Link>
            </TouchableOpacity>
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
    degrees: {
        fontSize: 17
    },
    container: {
        backgroundColor: 'oldlace'
    },
    containerDaily: {
        height: 70,
        paddingRight: 10,
        paddingTop: 12,
        paddingBottom: 12,
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
    },
    row: {
        flexDirection: 'row'
    },
    footer: {
        backgroundColor: 'oldlace'
    }
})