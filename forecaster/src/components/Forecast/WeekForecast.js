import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link, useLocation } from "react-router-native";

import { paths } from "../../constants/paths";
import { DayBrief } from "./DayBrief";


export const WeekForecast = ({langPicker}) => {
    const [data, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);
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
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {state.name}, {data.elevation}{langPicker().m}
                </Text>
            </View>
            <View style={styles.container}>
                {loading
                    ? <ActivityIndicator size="large" />
                    : data.daily.time.map((x, i) => 
                        <DayBrief data={data} i={i} key={x} />)
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
    header: {
        margin: 10
    },
    headerText: {
        fontSize: 18,
        alignSelf: 'center'
    },
    container: {
        backgroundColor: 'yellow'
    }
})