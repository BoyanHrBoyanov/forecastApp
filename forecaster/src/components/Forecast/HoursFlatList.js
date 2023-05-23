import { memo } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { iconHandler } from "../../handlers/weatherHandler";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export const HourlyFlatList = memo(function HourlyFlatList({
    langPicker,
    index,
    data }) {

    function render({ item, i }) {
        return (
            <View style={[styles.hourly, styles.row]} key={item.time}>
                <View style={styles.column}>
                    <Text>{item.time.split('T')[1]}</Text>
                    <Text style={styles.degrees}>
                        {(item.temperature).toFixed(0)}
                        <MaterialCommunityIcons name={'temperature-celsius'} size={18} />
                    </Text>
                </View>
                <View style={styles.column}>
                    <Text>{iconHandler(item.clouds, item.isDay)}</Text>
                </View>
                <View style={styles.column}>
                    <View style={{ position: 'absolute', right: 20, top: 40 }}>
                        <View style={{ transform: [{ rotate: `${item.windDirection}deg` }] }}>
                            <Entypo name={'arrow-long-up'}
                                size={18}
                                color={'lightyellow'} />
                        </View>
                    </View>
                    <Text>{`${(item.windSpeed).toFixed(0)} ${langPicker().kmh}`}</Text>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.containerHourly}>
            <FlatList
                data={data}
                removeClippedSubviews={true}
                renderItem={render} />
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingTop: 10
    },
    row: {
        flexDirection: 'row'
    },
    containerHourly: {
        //TODO: find another way to scroll a ScrollView to the bottom
        paddingBottom: 165
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