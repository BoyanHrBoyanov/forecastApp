import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const LocationButton = ({
    location
}) => {
    function onChooseLocation() {
        const lat = Number(location.lat).toFixed(2);
        const lon = Number(location.lon).toFixed(2);
        console.log(lat + ' & ' + lon);
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
        height: 70,
        paddingLeft: 10,
        paddingBottom: 5
        
    }
})