import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TrendingNews from './components/TrendingNews';
import DetailedNews from './components/DetailedNews';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(()=>{
    GoogleSignin.configure();
  },[])

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="trending"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Trending" component={TrendingNews} />
        <Stack.Screen name="Details" component={DetailedNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
