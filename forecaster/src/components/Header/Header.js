import { StyleSheet, Text, TouchableHighlight, View } from "react-native";


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
            <TouchableHighlight onPress={changeLang}>
                <Text>{lang}</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 40,
        marginLeft: 20,
        backgroundColor: '#fff'
    },
});