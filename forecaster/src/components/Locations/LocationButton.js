import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const LocationButton = ({
    location
}) => {
    function onChooseLocation() {
        console.log(location);
    }

    return (
        <View>
            <TouchableOpacity 
                    onPress={onChooseLocation}
                    style={styles.button}>
                <Text>{location.displayName}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 50
    }
})