import { useState, useEffect } from "react";
import { NativeRouter, Routes, Route } from "react-router-native";
import { StatusBar } from 'expo-status-bar';

import { locationHandler } from "./src/handlers/locationHandler";
import { langBG } from "./src/lang/bg";
import { langEN } from "./src/lang/en";
import { Home } from "./src/components/Home/Home";
import { FlatListBasics } from "./src/components/Test/FlatList";
import { Header } from "./src/components/Header/Header";

export default function App() {
    const [searchText, setSearchText] = useState('');
    const [modifiedLocations, setModifiedLocations] = useState([]);
    const [lang, setLang] = useState('EN')

    function onSearch(searchText) {
        const searchQuery = searchText.toLowerCase().split(' ').join('+');
        locationHandler(searchQuery, setModifiedLocations);
    }

    function onChooseLocation(location) {
        console.log(location);
    }

    function langPicker() {
        return lang === 'EN' ? langEN : langBG;
    }

    return (
        <NativeRouter>
            <Header lang={lang} setLang={setLang} />
            <Routes>
                <Route path="/" element={
                    <Home searchText={searchText}
                        setSearchText={setSearchText}
                        onSearch={onSearch}
                        modifiedLocations={modifiedLocations}
                        onChooseLocation={onChooseLocation}
                        langPicker={langPicker} />
                } />
                <Route path="/else" element={<FlatListBasics />} />
            </Routes>
        </NativeRouter>
    );
}


