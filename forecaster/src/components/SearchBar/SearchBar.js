import { TouchableHighlight, View, TextInput, Text, StyleSheet } from "react-native";

import { langBG } from "../../lang/bg";
import { langEN } from "../../lang/en";

export const SearchBar = ({
    searchText,
    setSearchText,
    onSearch,
    langPicker
}) => {

    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
                <TextInput type="text" 
                        placeholder={langPicker().searchLocation} 
                        style={styles.searchInput}
                        value={searchText}
                        onChangeText={setSearchText} />
            </View>
            <TouchableHighlight onPress={() => onSearch(searchText)}
                                style={styles.button}>
                <Text>{langPicker().search}</Text>
            </TouchableHighlight>

        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        marginTop: 15,
        padding: 10,
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
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 10
    },
})