import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useLocation } from "react-router-native";

import { dayIconHandler } from "../../handlers/weatherHandler";


export const HourlyForecast = ({ langPicker }) => {
    const { state } = useLocation(); // { data, i }
    const { dailyData, hourlyData, i } = state;

    const cloudsArr = dayIconHandler(hourlyData);

    return (
        <>
            <View style={styles.container}>
                <Text>
                    {`${cloudsArr[i].status}, ${cloudsArr[i].cloudCover}`}
                </Text>
                {/* <Image source={require('./icons50/moonAndClouds.png')} /> */}
            </View>


            <Link to="/">
                <Text>Back</Text>
            </Link>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})