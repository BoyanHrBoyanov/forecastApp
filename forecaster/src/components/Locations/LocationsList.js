import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

import { LocationButton } from "./LocationButton";


export const LocationsList = ({
    locations,
    loading
}) => {
    //about the FlatList
    //
    //progressViewOffset
    //Set this when offset is needed for the loading indicator to show correctly.
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