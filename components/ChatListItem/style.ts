import {Appearance, StyleSheet, useColorScheme} from 'react-native';
import Colors from "../../constants/Colors";

const colorScheme = Appearance.getColorScheme();
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around',
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 50,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors[colorScheme].text,
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
        
    },
    time: {
        fontSize: 14,
        color: 'grey',
    },
});

export default styles;