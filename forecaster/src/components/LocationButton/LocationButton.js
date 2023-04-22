import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export const LocationButton = ({
    location,
    onChooseLocation
}) => {


    return (
        <View>
            <TouchableHighlight 
                    onPress={() => onChooseLocation(location)}
                    style={styles.button}>
                <Text>{location.displayName}</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 50
    }
})