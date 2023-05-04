import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export const Header = ({
    lang,
    setLang
}) => {
    function changeLang() {
        return lang === 'EN'
            ? setLang('BG')
            : setLang('EN')
    }

    return(
        <View style={styles.header}>
            <TouchableOpacity onPress={changeLang} style={styles.button}>
                <Text>{lang}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        // marginLeft: 20,
        backgroundColor: 'oldlace'
    },
    button: {
        width: 40,
        height: 40,
        backgroundColor: 'oldlace',
        // alignSelf: 'flex-start',
        // textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,    
    }
});