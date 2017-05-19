/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

export default class humor_rn extends Component {
  render() {
    return (
      <View style={{flex: 1,
                    //justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 80, }}> 

        <View style={{width: 350, height: 150, backgroundColor: '#29384F'}} />
        <View style={{width: 350, height: 75, backgroundColor: '#1A2539'}} />
        <View style={{width: 350, height: 300, backgroundColor: '#121B27'}} />
          
      </View>

      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('humor_rn', () => humor_rn);
