import { Text, StyleSheet } from "react-native";

export const HourlyHeader = ({ date, langPicker }) => {
    return (
        <>
            <Text style={styles.headerText}>
                {langPicker().days[new Date(date).getDay()]}
            </Text>
            <Text style={styles.headerText}>
                {date.split('-').reverse().join('/')}
            </Text>
        </>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 18,
        alignSelf: 'center'
    },
})