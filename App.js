import {SafeAreaView, StyleSheet, View} from 'react-native';
// import Navbar from './components/Navbar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TrendingNews from './components/TrendingNews';
import DetailedNews from './components/DetailedNews';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <SafeAreaView style={styles.container}>
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="trending"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Trending" component={TrendingNews} />
        <Stack.Screen name="Details" component={DetailedNews} />
      </Stack.Navigator>
    </NavigationContainer>
    // <TrendingNews />
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
