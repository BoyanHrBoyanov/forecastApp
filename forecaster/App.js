import { useState, useEffect } from "react";
import { NativeRouter, Routes, Route } from "react-router-native";
import { StatusBar } from 'expo-status-bar';

import { locationHandler } from "./src/handlers/locationHandler";
import { Home } from "./src/components/Home/Home";
import { FlatListBasics } from "./src/components/Test/FlatList";

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
        <NativeRouter>
            <Routes>
                <Route path="/" element={
                    <Home searchText={searchText}
                        setSearchText={setSearchText}
                        onSearch={onSearch}
                        modifiedLocations={modifiedLocations}
                        onChooseLocation={onChooseLocation} />
                } />
                <Route path="/else" element={<FlatListBasics />} />
            </Routes>
        </NativeRouter>
    );
}


