import { memo } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { iconHandler } from "../../handlers/weatherHandler";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const HoursFlatList = memo(function HoursFlatList({
    langPicker,
    dailyData,
    index,
    data }) {

    function render({ item, i }) {
        return (
            <View style={[styles.hourly, styles.row]} key={item.time}>
                <View style={styles.column}>
                    <Text>{item.time.split('T')[1]}</Text>
                    <Text style={styles.degrees}>
                        {item.temperature.toFixed(0)}
                        <MaterialCommunityIcons name={'temperature-celsius'} size={18} />
                    </Text>
                </View>
                <View style={styles.column}>
                    <Text>{iconHandler(item.clouds, item.isDay, item.precipitation, true)}</Text>
                </View>
                <View style={styles.column}>
                    <View style={{ position: 'absolute', right: 30, top: 40 }}>
                        <View style={{ transform: [{ rotate: `${item.windDirection}deg` }] }}>
                            <Entypo name={'arrow-long-up'}
                                size={18}
                                color={'lightyellow'} />
                        </View>
                    </View>
                    <Text>{`${item.windSpeed.toFixed(0)} ${langPicker().kmh}`}</Text>
                </View>
                <View style={styles.column}>
                    <Text>
                        <Entypo name={'drop'} />
                        {`${item.precProb} %`}
                    </Text>
                    <Text>
                        {`${item.precipitation.toFixed(0)} ${langPicker().mm}`}
                    </Text>
                </View>
                <View style={styles.column}>
                    <Text>
                        {langPicker().feelsLike}
                    </Text>
                    <Text style={styles.degreesFeel}>
                        {item.appTemp.toFixed(0)}
                        <MaterialCommunityIcons name={'temperature-celsius'} size={18} />
                    </Text>
                </View>
            </View>
        );
    }

    function listHeader() {
        return (
            <>
            <View style={[styles.row, styles.listHeader]}>
                <View style={styles.column}>
                    <Feather name="sunrise" size={18} />
                    <Text>
                        {dailyData.sunrise[index].split('T')[1]}
                    </Text>
                </View>
                <View style={styles.column}>
                    <Feather name="sunset" size={18} />
                    <Text>
                        {dailyData.sunset[index].split('T')[1]}
                    </Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.uv}>
                        UV {dailyData.uv_index_max[index].toFixed(0)}
                    </Text>
                </View>
            </View>
            </>
        );
    }

    return (
        <SafeAreaView style={styles.containerHourly}>
            <FlatList
                data={data}
                removeClippedSubviews={true}
                ListHeaderComponent={listHeader}
                renderItem={render} />
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingTop: 10,
        width: 75
    },
    row: {
        flexDirection: 'row'
    },
    containerHourly: {
        //TODO: find another way to scroll a ScrollView to the bottom
        paddingBottom: 170
    },
    hourly: {
        height: 80,
        paddingRight: 10,
        backgroundColor: 'skyblue',
        borderBottomWidth: 3
    },
    degrees: {
        fontSize: 17,
        width: 40,
        textAlign: 'center',
        backgroundColor: 'whitesmoke'
    },
    degreesFeel: {
        fontSize: 17,
        width: 40,
        alignSelf: 'center'
    },
    listHeader: {
        justifyContent: 'space-between',
        backgroundColor: 'lightyellow',
        paddingHorizontal: 30
    },
    uv: {
        fontSize: 20,
        color: 'red'
    }
})