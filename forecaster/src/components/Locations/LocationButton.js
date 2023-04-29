import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "react-router-native";


export const LocationButton = ({
    location
}) => {
    return (
        <View>
            <Link to="/week"
                activeOpacity={0.3}
                underlayColor="oldlace"
                style={styles.button}
                state={{ 
                    lat: Number(location.lat).toFixed(2), 
                    lon: Number(location.lon).toFixed(2),
                    name: location.displayName
                }}>
                <View>
                    <Text>{location.displayName}</Text>
                </View>
            </Link>
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