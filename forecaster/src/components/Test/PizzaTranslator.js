import { useState } from "react";
import { Text, TextInput, View, Button, Alert } from "react-native";

export const PizzaTranslator = () => {
    const [text, setText] = useState('');

    return (
        <View style={{padding: 10}} >
            <Button 
                onPress={() => {
                    Alert.alert('You tapped the button');
                }}
                title="Press Me"
            />
            <TextInput 
                style={{height: 40}}
                placeholder="Type here to translate"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
                {text
                    .split(' ')
                    .map(word => word && '🍕')
                    .join(' ')}
            </Text>
        </View>
    );
}