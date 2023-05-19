import { useEffect, useRef } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { useLocation, useNavigate } from "react-router-native";

import { multiArrayModifier } from "../../handlers/longArraysHandler";
import { HourlyFlatList } from "./HoursFlatList";


export const HourlyForecast = ({ langPicker }) => {
    const scrollViewRef = useRef(null);

    const { state } = useLocation();
    const navigate = useNavigate();
    const { dailyData, hourlyData, currentData, dataIndex } = state;

    const [
        time,
        temperature,
        clouds,
        isDay,
        windDirection,
        windSpeed
    ] = multiArrayModifier([
        hourlyData.time,
        hourlyData.temperature_2m,
        hourlyData.cloudcover,
        hourlyData.is_day,
        hourlyData.winddirection_10m,
        hourlyData.windspeed_10m
    ]);


    const width = Dimensions.get('window');

    useEffect(() => {
        scrollViewRef.current.scrollTo({ x: dataIndex * width.width, y: 0 })
    }, [dataIndex]);

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {currentData.name}{`, ${currentData.elevation}${langPicker().m}.`}
                </Text>
            </View>
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={styles.container}
                showsHorizontalScrollIndicator={true}
                pagingEnabled={true}
                horizontal={true}
                persistentScrollbar={true}
            >
                {dailyData
                    ? dailyData.time.map((date, index) =>
                        <View style={[width]} key={index}>
                            <Text style={styles.headerText}>
                                {langPicker().days[new Date(dailyData.time[index]).getDay()]}
                            </Text>
                            <Text style={styles.headerText}>
                                {dailyData.time[index].split('-').reverse().join('/')}
                            </Text>
                            {hourlyData
                                ? <HourlyFlatList
                                    langPicker={langPicker}
                                    index={index}
                                    time={time[index]}
                                    temperature={temperature[index]}
                                    clouds={clouds[index]}
                                    isDay={isDay[index]}
                                    windDirection={windDirection[index]}
                                    windSpeed={windSpeed[index]} />
                                : null}

                        </View>)
                    : null}
            </ScrollView>


            <TouchableHighlight onPress={() => navigate(-1)}>
                <Text>Back</Text>
            </TouchableHighlight>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        backgroundColor: 'oldlace'
    },
    column: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingTop: 10
    },
    row: {
        flexDirection: 'row'
    },
    header: {
        padding: 10,
        backgroundColor: 'oldlace'
    },
    headerText: {
        fontSize: 18,
        alignSelf: 'center'
    },
    containerHourly: {
        //TODO: find another way to scroll a ScrollView to the bottom
        paddingBottom: 120
    },
    hourly: {
        height: 80,
        paddingRight: 10,
        backgroundColor: 'skyblue',
        borderBottomWidth: 3
    },
    degrees: {
        fontSize: 17,
        width: 40
    },
})