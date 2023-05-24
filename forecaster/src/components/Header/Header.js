import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigate, useLocation } from "react-router-native";

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export const Header = ({
    lang,
    setLang
}) => {
    const navigate = useNavigate();
    const route = useLocation;

    function changeLang() {
        return lang === 'EN'
            ? setLang('BG')
            : setLang('EN')
    }

    return (
        <>
            <StatusBar />
            <View style={styles.header}>
                {route().pathname === '/'
                    ? <TouchableOpacity style={styles.button} >
                        <FontAwesome5 name={'smile'} size={22} />
                    </TouchableOpacity>
                    : <TouchableOpacity style={[styles.backButton, styles.button]} onPress={() => navigate(-1)}>
                        <FontAwesome name={'arrow-circle-left'} size={22} />
                    </TouchableOpacity>
                }
                <TouchableOpacity onPress={changeLang} style={[styles.button, styles.langButton]}>
                    <Text>{lang}</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        backgroundColor: 'oldlace'
    },
    button: {
        backgroundColor: 'oldlace',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    langButton: {
        alignSelf: 'flex-end',
        width: 40,
        height: 50,
    }
});