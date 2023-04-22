import { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from "./src/components/SearchBar/SearchBar";


export default function App() {
    const [searchText, setSearchText] = useState('');
    const [location, setLocation] = useState('');

    useEffect

    return (
        <View style={styles.container}>
            <SearchBar searchText={searchText} 
                    setSearchText={setSearchText}
                    setLocation={setLocation} ></SearchBar>
            <Text>{location}</Text>
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
