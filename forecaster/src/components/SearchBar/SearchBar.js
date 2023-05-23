import { useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { locationHandler } from '../../handlers/locationHandler'

export const SearchBar = ({
    setModifiedLocations,
    langPicker,
    setLoading
}) => {
    const [searchText, setSearchText] = useState('');

    function onSearch() {
        const searchQuery = searchText.toLowerCase().split(' ').join('+');
        Keyboard.dismiss();
        locationHandler(searchQuery, setModifiedLocations, setLoading);
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
})