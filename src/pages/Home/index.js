import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';

import bg from '../../assets/bg_2.jpg';

export default function Home({ navigation }) {
  function handleNavigateToCornered() {
    navigation.navigate('Cornered');
  }

  function handleNavigateToHorizontal() {
    navigation.navigate('Horizontal');
  }

  return (
    <ImageBackground source={bg} style={styles.container}>
      <View style={styles.options_container}>
        <TouchableOpacity onPress={handleNavigateToCornered} style={styles.touchable_style_1}>
          <Text style={styles.text_style}>Try Cornered Action Button!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateToHorizontal} style={styles.touchable_style_2}>
          <Text style={styles.text_style}>Try Horizontal Expading Action Button!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  options_container: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    opacity: 0.7,
  },

  touchable_style_1: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: '#34ebba',
    borderRadius: 10,
  },

  touchable_style_2: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 25,
    backgroundColor: '#34ebba',
    borderRadius: 10,
  },

  text_style: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
});