import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container, styles.bgColor]}>

                <View style={styles.buttonsContainer}>
                    
                    <FlatList
                        data={[
                            { title: '1. FadeIn Color Text', screen: 'Animation1', key: '1' }, 
                        ]}
                        renderItem={({item}) =>
                            <TouchableHighlight style={styles.liItemContainer} onPress={() => this.props.navigation.navigate(item.screen)}>
                                <View style={styles.li}>
                                    <Text style={styles.liText}>{item.title}</Text>
                                </View>
                            </TouchableHighlight>
                        }
                        />

                </View>

            </View>
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