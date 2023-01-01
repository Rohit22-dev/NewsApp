import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import DetailedNews from './DetailedNews';
import {useNavigation} from '@react-navigation/native';
// import {BlurView} from '@react-native-community/blur';

const Newsbox = props => {
  const navigation = useNavigation();

  const onBoxPressed = () => {
    navigation.navigate('Details', {props});
  };
  return (
    <TouchableOpacity style={styles.box} onPress={onBoxPressed}>
      <Image
        source={{uri: props.News.urlToImage}}
        style={styles.image}
        resizeMode="stretch"
        borderRadius={10}
        onPress={onBoxPressed}
        // blurRadius
      />
      {/* <BlurView blurType="light"> */}
      <View style={styles.blurBox}>
        <Text style={styles.title} numberOfLines={3} onPress={onBoxPressed}>
          {props.News.title}
        </Text>
      </View>
      {/* </BlurView> */}
    </TouchableOpacity>
  );
};

export default Newsbox;

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#EC7272',
    overflow: 'hidden',
    height: 210,
    elevation: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  blurBox: {
    flex: 1,
    height: '27%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: 'white',
    marginLeft: 7,
    marginTop: 3,
    fontWeight: '500',
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
