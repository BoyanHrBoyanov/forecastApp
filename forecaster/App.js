import { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from "./src/components/SearchBar/SearchBar";

import { locationHandler } from "./src/handlers/locationHandler";


export default function App() {
    const [searchText, setSearchText] = useState('');
    const [location, setLocation] = useState('');
    const [modifiedLocations, setModifiedLocations] = useState([]);

    useEffect(() => {
        const searchQuery = location.toLowerCase().split(' ').join('+');
        locationHandler(searchQuery, setModifiedLocations);
        console.log(modifiedLocations);
    }, [location])

    return (
        <View style={styles.container}>
            <SearchBar searchText={searchText}
                setSearchText={setSearchText}
                setLocation={setLocation} ></SearchBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
