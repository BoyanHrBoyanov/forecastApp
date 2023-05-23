import { useState } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'react-router-native';

import { SearchBar } from "../SearchBar/SearchBar";
import { LocationsList } from "../Locations/LocationsList";

export const Home = ({
    langPicker
}) => {
    const [modifiedLocations, setModifiedLocations] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <>
            <View style={styles.container}>
                <SearchBar setModifiedLocations={setModifiedLocations}
                            langPicker={langPicker} 
                            setLoading={setLoading} />
                {modifiedLocations && 
                    <LocationsList locations={modifiedLocations}
                                    loading={loading} />}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'oldlace'
    },
});