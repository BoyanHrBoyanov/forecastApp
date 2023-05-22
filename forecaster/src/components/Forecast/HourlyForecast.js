import { useEffect, useRef } from "react";
import { Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { useLocation } from "react-router-native";

import { multiArrayModifier } from "../../handlers/longArraysHandler";
import { HourlyHeader } from "./HourlyHeader";
import { HourlyFlatList } from "./HoursFlatList";


export const HourlyForecast = ({ langPicker }) => {
    const scrollViewRef = useRef(null);

    const { state } = useLocation();
    const { dailyData, hourlyData, currentData, dataIndex } = state;

    const data = hourlyData.time.map((x, i) => ({
        time: x,
        temperature: hourlyData.temperature_2m[i],
        clouds: hourlyData.cloudcover[i],
        isDay: hourlyData.is_day[i],
        windDirection: hourlyData.winddirection_10m[i],
        windSpeed: hourlyData.windspeed_10m[i],
    }));

    function startEnd(index, str) {
        return str === 'start'
            ? index * 24
            : (index + 1) * 24;
    }

    const width = Dimensions.get('window');

    // useEffect(() => {
    //     scrollViewRef.current.scrollTo({ x: dataIndex * width.width, y: 0 })
    // }, [dataIndex]);

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {currentData.name}{`, ${currentData.elevation}${langPicker().m}.`}
                </Text>
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={dailyData.time}
                    ref={scrollViewRef}
                    // contentContainerStyle={styles.container}
                    // showsHorizontalScrollIndicator={true}
                    initialScrollIndex={dataIndex}
                    pagingEnabled={true}
                    horizontal={true}
                    persistentScrollbar={true}
                    renderItem={({ item, index }) => (
                        <View style={[width]} key={index}>
                            <HourlyHeader
                                date={item}
                                langPicker={langPicker} />
                            {hourlyData
                                ? <HourlyFlatList
                                    langPicker={langPicker}
                                    index={index}
                                    data={data.slice(startEnd(index, 'start'), startEnd(index, 'end'))} />
                                : null}

                        </View>
                    )}
                />
            </SafeAreaView>
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
    backButton: {
        backgroundColor: 'red'
    }
})