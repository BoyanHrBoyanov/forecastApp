import { memo } from "react";
import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useLocation } from "react-router-native";

import { HourlyHeader } from "./HourlyHeader";
import { HoursFlatList } from "./HoursFlatList";


export const HourlyForecast = memo(function HourlyForecast({ langPicker }) {

    const { state } = useLocation();
    const { dailyData, hourlyData, currentData, dataIndex } = state;

    const data = hourlyData.time.map((x, i) => ({
        time: x,
        temperature: hourlyData.temperature_2m[i],
        clouds: hourlyData.cloudcover[i],
        isDay: hourlyData.is_day[i],
        windDirection: hourlyData.winddirection_10m[i],
        windSpeed: hourlyData.windspeed_10m[i],
        precipitation: hourlyData.precipitation[i],
        precProb: hourlyData.precipitation_probability[i],
        appTemp: hourlyData.apparent_temperature[i],
    }));

    function startEnd(index, str) {
        return str === 'start'
            ? index * 24
            : (index + 1) * 24;
    }

    const width = Dimensions.get('window');

    function render({ item, index }) {
        return (
            <View style={[width]} key={index}>
                <HourlyHeader
                    date={item}
                    langPicker={langPicker} />
                {hourlyData
                    ? <HoursFlatList
                        langPicker={langPicker}
                        dailyData={dailyData}
                        index={index}
                        data={data.slice(startEnd(index, 'start'), startEnd(index, 'end'))} />
                    : null}

            </View>
        );
    }

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
                    getItemLayout={(currData, index) => ({
                        length: width.width,
                        offset: width.width * index,
                        index
                    })}
                    initialScrollIndex={dataIndex}
                    pagingEnabled={true}
                    horizontal={true}
                    persistentScrollbar={true}
                    renderItem={render} />
            </SafeAreaView>
        </>
    );
});

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