import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const LocationButton = ({
    location,
    onChooseLocation
}) => {
    return (
        <View>
            <TouchableOpacity 
                    onPress={() => onChooseLocation(location)}
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