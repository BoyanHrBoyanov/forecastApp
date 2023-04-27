import { useState } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'react-router-native';

import { SearchBar } from "../SearchBar/SearchBar";
import { LocationsList } from "../Locations/LocationsList";

export const Home = ({
    langPicker
}) => {
    const [modifiedLocations, setModifiedLocations] = useState([]);

    return (
        <>
            <View style={styles.container}>
                <SearchBar setModifiedLocations={setModifiedLocations}
                langPicker={langPicker} ></SearchBar>
                {modifiedLocations && 
                    <LocationsList locations={modifiedLocations} />}
            </View>
            <View>
                <Link to="/else">
                    <Text>Go Elsewhere</Text>
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});