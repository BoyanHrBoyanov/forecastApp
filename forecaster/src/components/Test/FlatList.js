import { FlatList, StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { Link } from 'react-router-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        maxHeight: 600
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const names = ['Devin', 'Dan', 'Dominic', 'Jackson', 'James', 'Joel', 'John', 'Jillian', 'Jimmy', 'Julie'];

export const FlatListBasics = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: 'Devin' },
                    { key: 'Dan' },
                    { key: 'Dominic' },
                    { key: 'Jackson' },
                    { key: 'James' },
                    { key: 'Joel' },
                    { key: 'John' },
                    { key: 'Jillian' },
                    { key: 'Jimmy' },
                    { key: 'Julie' },
                    { key: '1' },
                    { key: '2' },
                    { key: '3' },
                    { key: '4' },
                    { key: '5' },
                    { key: '6' },
                    { key: '7' },
                    { key: '8' },
                    { key: '9' },
                    { key: '11' },
                    { key: '12' },
                ]}
                renderItem={({ item }) =>
                    <Text style={styles.item}>
                        {item.key}
                    </Text>
                }
            />
            <TouchableHighlight>
                <Link to="/">
                    <Text>Go Back</Text>
                </Link>
            </TouchableHighlight>
        </View>
    );
}
// export const FlatListBasics = () => {
//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={[
//                     { key: 'Devin' },
//                     { key: 'Dan' },
//                     { key: 'Dominic' },
//                     { key: 'Jackson' },
//                     { key: 'James' },
//                     { key: 'Joel' },
//                     { key: 'John' },
//                     { key: 'Jillian' },
//                     { key: 'Jimmy' },
//                     { key: 'Julie' }
//                 ]}
//                 renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
//             />
//         </View>
//     );
// };
// }