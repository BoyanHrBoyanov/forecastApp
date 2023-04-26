import { StyleSheet, Text, View, Button } from 'react-native';
import { Link, Route } from 'react-router-native';

import { SearchBar } from "../SearchBar/SearchBar";
import { LocationButton } from "../LocationButton/LocationButton";
import { FlatListBasics } from '../Test/FlatList';

export const Home = ({
    searchText,
    setSearchText,
    onSearch,
    modifiedLocations,
    onChooseLocation,
    langPicker
}) => {
    return (
        <>
            <View style={styles.container}>
                <SearchBar searchText={searchText}
                    setSearchText={setSearchText}
                    onSearch={onSearch}
                    langPicker={langPicker} ></SearchBar>
                {modifiedLocations.map(l =>
                    <LocationButton
                        key={l.i}
                        location={l}
                        onChooseLocation={onChooseLocation} />)}
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