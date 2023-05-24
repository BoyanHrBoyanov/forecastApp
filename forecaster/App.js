import { useState, useEffect } from "react";
import { Alert, BackHandler } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";

import { langBG } from "./src/lang/bg";
import { langEN } from "./src/lang/en";
import { Home } from "./src/components/Home/Home";
import { Header } from "./src/components/Header/Header";
import { DailyForecast } from "./src/components/Forecast/DayliForecast";
import { HourlyForecast } from "./src/components/Forecast/HourlyForecast";

export default function App() {
    const [lang, setLang] = useState('EN')

    function langPicker() {
        return lang === 'EN' ? langEN : langBG;
    }

    function handleYes() {
        BackHandler.exitApp();
    }

    useEffect(() => {
        const backAction = () => {
                Alert.alert('Hold on!', 'Are you sure you want to exit the app?', [
                    {
                        text: 'Cancel',
                        onPress: () => null,
                        style: 'cancel'
                    },
                    {text: 'Yes', onPress: handleYes}
                ]);
                return true;
        }
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, [])

    return (
        <NativeRouter>
            <Header lang={lang} setLang={setLang} />
            <Routes>
                <Route path="/" element={
                    <Home langPicker={langPicker} />
                } />
                <Route path="/week" element={<DailyForecast langPicker={langPicker} />} />
                <Route path="/details" element={<HourlyForecast langPicker={langPicker} />} />
            </Routes>
        </NativeRouter>
    );
}


