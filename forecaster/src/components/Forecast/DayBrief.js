import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";


export const DayBrief = ({
    data,
    i
}) => {
    return (
        <Link to="/details"
                state={{data, i}}
                style={styles.container}>
            <Text>
                {data.daily.time[i]}
            </Text>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'oldlace',
        borderColor: 'black'
    }
})