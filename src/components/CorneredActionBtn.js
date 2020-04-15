import React from 'react';
import { 
  View, 
  ImageBackground, 
  TouchableHighlight, 
  TouchableOpacity, 
  StyleSheet, 
  Animated } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import bg from '../assets/bg_2.jpg';

export default function App() {
  let isExpanded = false;

  const rightValue = new Animated.Value(40);
  const right_bottom_value = new Animated.Value(35);
  
  const opacityX = new Animated.Value(1);
  const opacityY = new Animated.Value(0);

  function handleAnimation() {
    if (isExpanded) {
      handleClosingAnimation();
      isExpanded = false;
    } else {
      handleOpenningAnimation();
      isExpanded = true;
    }
  }

  function handleOpenningAnimation() {
    Animated.timing(rightValue, {
      delay: 50,
      duration: 300,
      toValue: 110,
      useNativeDriver: false,
    }).start();
    
    Animated.timing(right_bottom_value, {
      
      duration: 300,
      toValue: 100,
      useNativeDriver: false,
    }).start();

    Animated.timing(opacityX, {
      duration: 250,
      toValue: 0,
      useNativeDriver: false,
    }).start();

    Animated.timing(opacityY, {
      duration: 250,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  }

  function handleClosingAnimation() {
    Animated.timing(rightValue, {
      duration: 300,
      toValue: 40,
      useNativeDriver: false,
    }).start();
    
    Animated.timing(right_bottom_value, {
      duration: 300,
      toValue: 35,
      useNativeDriver: false,
    }).start();

    Animated.timing(opacityY, {
      duration: 250,
      toValue: 0,
      useNativeDriver: false,
    }).start();

    Animated.timing(opacityX, {
      duration: 250,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  }

  return (
    <ImageBackground source={bg} style={{flex: 1}}>
        
      <Animated.View style={[styles.sub_float_btn_op_1, {right: rightValue}]}>
        <TouchableOpacity>
          <Icon name="person-add" size={20} color="#000" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.sub_float_btn_op_3, {bottom: right_bottom_value, right: right_bottom_value}]}>
        <TouchableOpacity>
          <Icon name="my-location" size={20} color="#000" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.sub_float_btn_op_2, {bottom: rightValue}]}>
        <TouchableOpacity>
          <Icon name="edit" size={20} color="#000" />
        </TouchableOpacity>
      </Animated.View>

      <TouchableHighlight onPress={handleAnimation} style={styles.float_btn}> 
        <View> 
          <Animated.View style={{opacity: opacityX}}>
            <Icon style={{position: "absolute", bottom: -15, right: -15}} name="more-vert" size={30} color="#000" />
          </Animated.View>
          <Animated.View style={{opacity: opacityY}}>
            <Icon style={{position: "absolute", bottom: -15, right: -15}} name="close" size={30} color="#000" />
          </Animated.View>
        </View>
      </TouchableHighlight>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  float_btn: {
    position: "absolute",
    backgroundColor: '#65e6b0',
    bottom: 20,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: "#65e6b0",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  sub_float_btn_op_1: {
    position: "absolute",
    backgroundColor: '#65e6b0',
    bottom: 30,
    right: 130,
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: "#65e6b0",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  sub_float_btn_op_2: {
    position: "absolute",
    backgroundColor: '#65e6b0',
    right: 30,
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: "#65e6b0",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  sub_float_btn_op_3: {
    position: "absolute",
    backgroundColor: '#65e6b0',
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: "#65e6b0",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});