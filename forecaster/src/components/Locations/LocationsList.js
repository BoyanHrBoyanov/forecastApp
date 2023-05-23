import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

import { LocationButton } from "./LocationButton";


export const LocationsList = ({
    locations,
    loading
}) => {
    return (
        <View style={styles.listContainer}>
            {loading && <ActivityIndicator size='large' />}
            {locations && <FlatList data={locations}
                        renderItem={({ item }) => 
                            <LocationButton
                                location={item} />}
                            />}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 10
    }
})