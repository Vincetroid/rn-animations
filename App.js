import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, Animated } from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import Navigation from './Navigation';

console.disableYellowBox = true;

export default class App extends React.Component {

    render() {
        return (
            <Navigation/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    buttonsContainer: {
        flex: 24,
        // backgroundColor: 'teal'
    },
    bgColor: {
        backgroundColor: '#f8f8f7',
        // backgroundColor: 'red',
    },
    liItemContainer: {
        backgroundColor: '#0075af',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        marginVertical: 2,
        height: 40,
    },
    li: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    liText: {
        color: '#fff',
        fontSize: 20,
    }
});