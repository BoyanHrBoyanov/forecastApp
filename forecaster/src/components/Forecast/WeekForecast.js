import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link, useLocation } from "react-router-native";

import { weatherDataHandler } from "../../handlers/weatherDataHandler";
import { paths } from "../../constants/paths";


export const WeekForecast = () => {
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(false);
    const { state } = useLocation()

    useEffect(() => {
        setLoading(true);

        fetch(paths.weather(state.lat, state.lon))
            .then(response => response.json())
            .then(data => {
            setWeatherData(data);
            setLoading(false);
        });

    }, [])

    return (
        <>
            <View style={styles.container}>
                {loading
                    ? <ActivityIndicator size="large" />
                    : <Text>{weatherData.elevation}</Text>
                }
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
    container: {
        backgroundColor: 'yellow'
    }
})