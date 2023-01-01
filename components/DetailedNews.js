import {Dimensions, Image, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

const DetailedNews = route => {
  const prop = route.route.params.props.News;
  console.log(prop);
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `${prop.urlToImage}`}}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.details}>
        <Text style={styles.content}>{prop.title}</Text>
        <Text style={styles.description}>
          {prop.content.substring(0, prop.content.indexOf('['))}
          <Text
            onPress={() => Linking.openURL(prop.url)}
            style={{
              color: 'blue',
              textDecorationLine: 'underline',
              fontStyle: 'italic',
            }}>
            Read more
          </Text>
          {'\n'}
          {prop.description}
        </Text>
        <Text
          style={{
            marginHorizontal: 10,
            fontSize: 15,
            color: '#000000c0',
            fontWeight: '600',
          }}>
          Author-{'Not available' ?? prop.author}
        </Text>
        <Text
          style={{
            marginHorizontal: 10,
            fontSize: 15,
            color: '#000000c0',
            fontStyle: 'italic',
          }}>
          Published at -{new Date(prop.publishedAt).toLocaleString('en-IN')}
        </Text>
      </View>
    </View>
  );
};

export default DetailedNews;

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {width: width, height: '40%'},
  details: {
    marginTop: '-6%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'rgba(238, 238, 238,1)',
    padding: 10,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  content: {fontWeight: 'bold', fontSize: 25, color: '#000', margin: 10},
  description: {
    color: '#000',
    margin: 10,
    fontSize: 18,
    letterSpacing: 1,
    lineHeight: 22,
  },
});
