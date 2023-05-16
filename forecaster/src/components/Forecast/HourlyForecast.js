import { useEffect, useRef } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { useLocation, useNavigate } from "react-router-native";

import { dayIconHandler } from "../../handlers/weatherHandler";


export const HourlyForecast = ({ langPicker }) => {
    const container = useRef(null);
    
    const { state } = useLocation();
    const navigate = useNavigate();
    const { dailyData, hourlyData, currentData, dataIndex } = state;
    
    const width = Dimensions.get('window');
    
    const cloudsArr = dayIconHandler(hourlyData);

    useEffect(() => {
        container.current.scrollTo({x: dataIndex * width.width, y: 0})
    }, [dataIndex]);

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {currentData.name}{`, ${currentData.elevation}${langPicker().m}.`}
                </Text>
            </View>
            <ScrollView
                ref={container}
                contentContainerStyle={styles.container}
                showsHorizontalScrollIndicator={true}
                pagingEnabled={true}
                horizontal={true}
                persistentScrollbar={true}
                
            >
                {dailyData
                    ? dailyData.time.map((date, index) =>
                        <View style={[styles.row, width]} key={index}>
                            <Text style={styles.headerText}>
                                {langPicker().days[new Date(dailyData.time[index]).getDay()]}
                            </Text>
                            <Text style={styles.headerText}>
                                {dailyData.time[index].split('-').reverse().join('/')}
                            </Text>
                            <Text>
                                {`${cloudsArr[index].status}, ${cloudsArr[index].cloudCover}`}
                            </Text>
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
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: 'oldlace'
    },
    row: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'darkgrey',
        flex: 1,
    },
    header: {
        padding: 10,
        backgroundColor: 'oldlace'
    },
    headerText: {
        fontSize: 18,
        alignSelf: 'center'
    }
})