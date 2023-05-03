import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link, useLocation } from "react-router-native";

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
            return require('../../../assets/icons50/sun.png');
        } else if (cloudsArr[index].status === 'sun and clouds') {
            return require('../../../assets/icons50/sunAndClouds.png');
        } else {
            return require('../../../assets/icons50/clouds.png');
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
                        style={styles.containerDaily}>
                        <View>
                            <Text>
                                {hourlyData ? <Image source={iconHandler(i)} /> : null}
                                {dailyData.time[i]} {langPicker().days[new Date(dailyData.time[i]).getDay()]}
                            </Text>
                            <Text>
                                {langPicker().rainProb} - {dailyData.precipitation_probability_max[i]} %
                            </Text>
                            <Text>
                                {langPicker().rainSum} - {dailyData.rain_sum[i]} mm
                            </Text>
                        </View>
                    </Link>)
                    : null}
            </View>
            <TouchableOpacity>
                <Link to="/">
                    <Text>Back</Text>
                </Link>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        margin: 10
    },
    headerText: {
        fontSize: 18,
        alignSelf: 'center'
    },
    container: {
        backgroundColor: 'yellow'
    },
    containerDaily: {
        backgroundColor: 'oldlace',
        borderColor: 'black'
    }
})