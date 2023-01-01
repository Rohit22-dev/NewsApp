import {
  ActivityIndicator,
  Alert,
  BackHandler,
  Dimensions,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import React, {useEffect, useState} from "react";
import SelectType from "./SelectType";
import Newsbox from "./Newsbox";
import Navbar from "./Navbar";
import axios from "axios";
import {countries, category} from "./data";

const screenWidth = Dimensions.get("window").width;

const TrendingNews = () => {
  const [headlines, setHeadlines] = useState(null);
  const [selectedCN, setSelectedCN] = useState("in");
  const [selectedCT, setSelectedCT] = useState("technology");

  useEffect(() => {
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      `country=${selectedCN}&` +
      `category=${selectedCT}&` +
      "pageSize=30&" +
      `apiKey=${process.env.API_KEY}`;

    axios
      .get(url)
      .then(res => {
        setHeadlines(res.data);
      })
      .catch(e => {
        if (e.code === "ERR_BAD_REQUEST") {
          Alert.alert("Request limit exceeds", "Try after some time.");
        } else {
          window.alert(e.message);
        }
      });
  }, [selectedCN, selectedCT]);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Stop", "Are you sure you want to go back.",
        [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => BackHandler.exitApp(),
          },
        ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    // return () => backHandler.remove();
  }, []);

  return (
    <>
      <Navbar />
      <View
        style={{
          borderBottomColor: "#00000008",
          borderBottomWidth: 1,
          elevation: 5,
        }}
      />
      <View style={styles.container}>
        <View style={styles.option}>
          <SelectType
            setValue={setSelectedCN}
            initial={{key: "us", value: "USA"}}
            type={countries}
          />
          <SelectType
            setValue={setSelectedCT}
            initial={{key: "technology", value: "Technology"}}
            type={category}
          />
        </View>
        {headlines === null ? (
          <ActivityIndicator
            size="large"
            style={{flex: 1, alignSelf: "center"}}
          />
        ) : (
          <FlatList
            data={headlines.articles}
            renderItem={({item}) => <Newsbox News={item} />}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            style={styles.list}
            numColumns={2}
          />
        )}
      </View>
    </>
  );
};

export default TrendingNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    width: screenWidth,
  },
  option: {flexDirection: "row", marginTop: 10},
});
