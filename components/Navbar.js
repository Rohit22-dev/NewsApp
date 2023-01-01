import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('window').width;
const qwerty = () => {
  console.warn('Header Pressed');
};

const Navbar = () => {
  return (
    <View style={styles.navBox}>
      <Text style={styles.navText} onPress={qwerty}>
        Neuuuz
      </Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navBox: {
    width: screenWidth,
    paddingLeft: 20,
    height: 70,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  navText: {
    color: '#000',
    fontSize: 30,
    fontWeight: '700',
  },
});
