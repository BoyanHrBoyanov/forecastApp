import { useState, useEffect } from "react";
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Location from "expo-location";

import { Entypo } from '@expo/vector-icons';

import { locationHandler } from '../../handlers/locationHandler'

export const SearchBar = ({
    setModifiedLocations,
    langPicker,
    setLoading
}) => {
    const [searchText, setSearchText] = useState('');
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    function onSearch() {
        const searchQuery = searchText.toLowerCase().split(' ').join('+');
        Keyboard.dismiss();
        locationHandler(searchQuery, setModifiedLocations, setLoading);
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }

    function getLocation() {
        if (location) {
            const coordinates = `${location.coords.latitude}+${location.coords.longitude}`
            locationHandler(coordinates, setModifiedLocations, setLoading);
        }
    }

    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
                <TextInput type="text"
                    placeholder={langPicker().searchLocation}
                    style={styles.searchInput}
                    value={searchText}
                    onChangeText={setSearchText} />
            </View>
            <TouchableOpacity onPress={() => onSearch(searchText)}
                style={styles.button}>
                <Text>{langPicker().search}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={getLocation}>
                <Entypo name={'location'} size={24} style={styles.location} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 5,
        padding: 7,
        width: '100%',
    },
    searchInputContainer: {
        width: '70%',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'black'
    },
    searchInput: {
        textAlign: 'center',
        paddingVertical: 15,
        fontSize: 18
    },
    button: {
        backgroundColor: 'moccasin',
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    location: {
        paddingVertical: 10,
        marginVertical: 10
    },
})