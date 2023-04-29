import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useLocation } from "react-router-native";


export const DayDetailed = ({ langPicker }) => {
    const { state } = useLocation(); // { data, i }

    return (
        <>
            <View style={styles.container}>
                <Text>
                    {state.i}
                </Text>
                <Image source={require('./icons50/moonAndClouds.png')} />
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