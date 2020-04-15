import React from 'react';
import { TouchableOpacity, StyleSheet, Animated, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import bg from '../assets/bg_2.jpg';

export default function App() {
  let isExpanded = false;

  const opacityX = new Animated.Value(1);
  const opacityY = new Animated.Value(0);
  const right_distance = new Animated.Value(20);
  
  const act_btn_1 = new Animated.Value(0);
  const act_btn_2 = new Animated.Value(0);
  const act_btn_3 = new Animated.Value(0);
  const act_btn_4 = new Animated.Value(0);

  function handleAnimation() {
    if (isExpanded) {
      Animated.timing(opacityY, {
        duration: 10,
        toValue: 0,
        useNativeDriver: false,
      }).start();
  
      Animated.timing(opacityX, {
        duration: 250,
        toValue: 1,
        useNativeDriver: false,
      }).start();

      Animated.spring(right_distance, {
        toValue: 20,
        useNativeDriver: false,
      }).start();

      Animated.spring(act_btn_1, {
        toValue: 0,
        useNativeDriver: false,
        delay: 25,
      }).start();

      Animated.spring(act_btn_2, {
        toValue: 0,
        useNativeDriver: false,
        delay: 25,
      }).start();

      Animated.spring(act_btn_3, {
        toValue: 0,
        useNativeDriver: false,
        delay: 25,
      }).start();

      Animated.spring(act_btn_4, {
        toValue: 0,
        useNativeDriver: false,
        delay: 25,
      }).start();

      isExpanded = false;
    } else {
      Animated.timing(opacityX, {
        duration: 10,
        toValue: 0,
        useNativeDriver: false,
      }).start();
  
      Animated.timing(opacityY, {
        duration: 320,
        toValue: 1,
        useNativeDriver: false,
      }).start();

      Animated.spring(right_distance, {
        duration: 200,
        toValue: 260,
        useNativeDriver: false,
        bounciness: 18  ,
      }).start();

      Animated.spring(act_btn_1, {
        toValue: 1,
        useNativeDriver: false,
        delay: 500,
      }).start();

      Animated.spring(act_btn_2, {
        toValue: 1,
        useNativeDriver: false,
        delay: 450,
      }).start();

      Animated.spring(act_btn_3, {
        toValue: 1,
        useNativeDriver: false,
        delay: 400,
      }).start();

      Animated.spring(act_btn_4, {
        toValue: 1,
        useNativeDriver: false,
        delay: 350,
      }).start();

      isExpanded = true;
    }
  }

  return (
    <ImageBackground source={bg} style={{flex: 1}}>
      <Animated.View style={[styles.float_btn, { right: right_distance}]}>
        <TouchableOpacity onPress={handleAnimation} style={styles.touchable_style}>
          <Animated.View style={{opacity: opacityX}}>
            <Icon style={styles.icon_style} name="more-vert" size={30} color="#000" />
          </Animated.View>
          <Animated.View style={{opacity: opacityY}}>
            <Icon style={styles.icon_style} name="close" size={30} color="#000" />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.sub_act_btn_1, { opacity: act_btn_1}]}>
        <TouchableOpacity onPress={handleAnimation} style={styles.sub_touchables}>
          <Icon name="edit" size={20} color="#000" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.sub_act_btn_2, { opacity: act_btn_2}]}>
        <TouchableOpacity onPress={handleAnimation} style={styles.sub_touchables}>
          <Icon name="person-add" size={20} color="#000" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.sub_act_btn_3, { opacity: act_btn_3}]}>
        <TouchableOpacity onPress={handleAnimation} style={styles.sub_touchables}>
          <Icon name="my-location" size={20} color="#000" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.sub_act_btn_4, { opacity: act_btn_4}]}>
        <TouchableOpacity onPress={handleAnimation} style={styles.sub_touchables}>
          <Icon name="camera-alt" size={20} color="#000" />
        </TouchableOpacity>
      </Animated.View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  float_btn: {
    zIndex: 1,
    backgroundColor: 'yellow',
    position: "absolute",
    backgroundColor: '#65e6b0',
    bottom: 20,
    // right: 20,
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  touchable_style: {
    position: 'absolute',
    zIndex: 3,
    width: 70,
    height: 70,
    borderRadius: 40
  },

  icon_style: {
    position: "absolute", 
    bottom: -50, 
    right: 20
  },

  sub_act_btn_1: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#65e6b0',
    justifyContent: "center",
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  sub_act_btn_2: {
    position: "absolute",
    right: 80,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#65e6b0',
    justifyContent: "center",
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  sub_act_btn_3: {
    position: "absolute",
    right: 140,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#65e6b0',
    justifyContent: "center",
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  sub_act_btn_4: {
    position: "absolute",
    right: 200,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#65e6b0',
    justifyContent: "center",
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  sub_touchables: {
    width: 50,
    height: 50,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: 'center',
  },
});