import { FlatList, StyleSheet, View } from "react-native";

import { LocationButton } from "./LocationButton";


export const LocationsList = ({
    locations
}) => {
    return (
        <View style={styles.listContainer}>
            <FlatList data={locations}
                        renderItem={({ item }) => 
                            <LocationButton
                                location={item} />}
                            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center'
    }
})