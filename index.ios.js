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
  ListView,
  Text,
  View
} from 'react-native';

export default class humor_rn extends Component {

    //Create list
    constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7']),
    };
  }

  render() {
    return (
      <View style={{flex: 1,
                    //justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 80, }}> 

        <View style={{width: 350, height: 150, backgroundColor: '#29384F'}}>

        </View>
        
         <View style={{width: 350, height: 75, backgroundColor: '#1A2539'}}>

            <Text style={styles.welcome}>
              Leitura
            </Text>

         </View>

         <View style={{width: 350, height: 300, backgroundColor: '#121B27'}}>
            
           <ListView style={styles}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData.welcome}</Text>}
           />
          
         </View>
          
      </View>
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
    fontSize: 14,
    textAlign: 'left',
    margin: 20,
    color: '#FFFFFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('humor_rn', () => humor_rn);
