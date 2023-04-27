import { useState } from "react";
import { NativeRouter, Routes, Route } from "react-router-native";
import { StatusBar } from 'expo-status-bar';

import { langBG } from "./src/lang/bg";
import { langEN } from "./src/lang/en";
import { Home } from "./src/components/Home/Home";
import { FlatListBasics } from "./src/components/Test/FlatList";
import { Header } from "./src/components/Header/Header";

export default function App() {
    const [lang, setLang] = useState('EN')

    function langPicker() {
        return lang === 'EN' ? langEN : langBG;
    }

    return (
        <NativeRouter>
            <Header lang={lang} setLang={setLang} />
            <Routes>
                <Route path="/" element={
                    <Home langPicker={langPicker} />
                } />
                <Route path="/else" element={<FlatListBasics />} />
            </Routes>
        </NativeRouter>
    );
}


