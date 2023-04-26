import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home/Home';
import Register from './Register/Register';
import Buyer from './Buyer/Buyer';


const Stack = createStackNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Buyer" component={Buyer} />
    </Stack.Navigator>
  )
}

export default HomeScreen