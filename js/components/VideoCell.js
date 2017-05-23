/*
 * Removed for brevity
 */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class VideoCell extends React.Component {

  render() {
    return (

      <View style={styles.container}>
        <Image style={styles.photo} source={require('../public/react.png')} />
         <Text style={styles.text}>
           {this.props.texto}
         </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    color: '#FFFFFF',
    paddingTop: 20,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

export default VideoCell;