import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './HomeScreen/HomeScreen';

const Stack = createStackNavigator();
const MainScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainScreen;
