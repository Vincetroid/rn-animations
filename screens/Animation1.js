import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FadeInView from '../components/FadeInView';

export default class Animation1 extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <FadeInView style={{ width: 250, height: 50, backgroundColor: 'powderblue' }}>
                    <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
                </FadeInView>
            </View>
        );
    }
}

