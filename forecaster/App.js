import { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from "./src/components/SearchBar/SearchBar";

import { locationHandler } from "./src/handlers/locationHandler";
import { LocationButton } from "./src/components/LocationButton/LocationButton";


export default function App() {
    const [searchText, setSearchText] = useState('');
    const [modifiedLocations, setModifiedLocations] = useState([]);

    function onSearch(searchText) {
        const searchQuery = searchText.toLowerCase().split(' ').join('+');
        locationHandler(searchQuery, setModifiedLocations);
    }

    function onChooseLocation(location) {
        console.log(location);
    }

    return (
        <View style={styles.container}>
            <SearchBar searchText={searchText}
                setSearchText={setSearchText}
                onSearch={onSearch} ></SearchBar>
            {modifiedLocations.map(l =>
                <LocationButton 
                    key={l.i} 
                    location={l}
                    onChooseLocation={onChooseLocation} />)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
