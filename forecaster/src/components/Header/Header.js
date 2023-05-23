import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
            <View style={styles.header}>
                {route().pathname === '/'
                    ? <TouchableOpacity style={[styles.backButton, styles.button]} >
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
        paddingTop: 40,
        // marginLeft: 20,
        backgroundColor: 'oldlace'
    },
    button: {
        backgroundColor: 'oldlace',
        // alignSelf: 'flex-start',
        // textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    backButton: {
        // width: 60,
        // height: 50,
    },
    langButton: {
        alignSelf: 'flex-end',
        width: 40,
        height: 50,
    }
});