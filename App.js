import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
// import Animation1Screen from "./screens/Animation1";

console.disableYellowBox = true;

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Animation1')}>
                    <Text>Texto</Text>
                </TouchableHighlight>
          </View>
        );
    }
}

class Animation1Screen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      return (
        <View>
          <Text> Animation1 </Text>
        </View>
      );
    }
  }

const MainStack = createStackNavigator(
	{
        Home: {
            screen: HomeScreen,
        },
        Animation1: {
            screen: Animation1Screen,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 'Animation 1',
            })
        },
	},
	{
        initialRouteName: 'Home',
    }
);

export default createAppContainer(MainStack)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
      //   width: 100,
      //   height: 100,
    //   width: this.state.width,
    //   height: this.state.height,
      backgroundColor: 'blue',
  }
});
