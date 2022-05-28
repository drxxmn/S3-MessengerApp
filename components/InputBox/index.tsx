import React, {useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {FontAwesome5,
    MaterialCommunityIcons,
    Entypo,
    Fontisto,
    MaterialIcons,
} from "@expo/vector-icons";

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn('microphone')
    }

    const onSendPress = () => {
        console.warn(`Sending: ${message}`)

        //send message to backend

        setMessage('')
    }


    const onPress = () => {
        if(!message) {
            onMicrophonePress();
        } else{
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput
                    placeholder={"Type a message"}
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color="grey" style={styles.icon}/>
                {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon}/>}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {!message
                        ? <MaterialCommunityIcons name="microphone" size={24} color="white"/>
                        : <MaterialIcons name="send" size={24} color="white" />
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;