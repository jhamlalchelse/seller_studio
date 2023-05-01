import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home/Home';
import Register from './Register/Register';
import Buyer from './Buyer/Buyer';
import Seller from './Seller/Seller';
import ValueAddedService from './ValueAddedService/ValueAddedService';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
const HomeScreen = () => {
  return (
    <>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Buyer" component={Buyer} />
      <Stack.Screen name="Seller" component={Seller} />
      <Stack.Screen name="ValueAddedService" component={ValueAddedService} />
    </Stack.Navigator>
    </>
  )
}

export default HomeScreen