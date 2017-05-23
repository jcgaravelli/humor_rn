/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import VideoCell from '../components/VideoCell'
import {
  AppRegistry,
  Image,
  ListView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Consumo extends Component {

    //Create list
    constructor() {
     super();
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7'])
     };
  }

  render() {
    return (
      <View style={{flex: 1,
                    //justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 80, }}> 

        <StatusBar backgroundColor="blue" barStyle="light-content"/>
        <View style={{width: 375, height: 175, backgroundColor: '#29384F'}}> 
        </View>
        
          <View style={{width: 375, height: 100, backgroundColor: '#1A2539'}}>
           <Text style={styles.text}>
             Leitura
           </Text>
          </View>

          <View style={{width: 375, height: 310, backgroundColor: '#121B27'}}>
            
           <ListView 
             dataSource={this.state.dataSource}
             renderRow={(rowData) => <VideoCell texto={rowData}/>}
            />
          </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    color: '#FFFFFF',
    paddingTop: 20,
  },
});
