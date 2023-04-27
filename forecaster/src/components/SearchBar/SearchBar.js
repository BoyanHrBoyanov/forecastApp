import { useState } from "react";
import { TouchableOpacity, View, TextInput, Text, StyleSheet } from "react-native";

import { locationHandler } from '../../handlers/locationHandler'

export const SearchBar = ({
    setModifiedLocations,
    langPicker
}) => {
    const [searchText, setSearchText] = useState('');

    function onSearch() {
        const searchQuery = searchText.toLowerCase().split(' ').join('+');
        locationHandler(searchQuery, setModifiedLocations);
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
        // alignContent: 'center',
        marginBottom: 5,
        padding: 7,
        width: '100%',
        // backgroundColor: 'yellow'
    },
    searchInputContainer: {
        width: '70%',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#F0F0F1'
    },
    searchInput: {
        textAlign: 'center',
        paddingVertical: 15,
        fontSize: 18
    },
    button: {
        // alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 10
    },
})