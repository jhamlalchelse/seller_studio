import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './Home/Home';
import Register from './Register/Register';
import Buyer from './Buyer/Buyer';
import Seller from './Seller/Seller';
import ValueAddedService from './ValueAddedService/ValueAddedService';

const Stack = createStackNavigator();
const MainScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={route => ({
        headerTitle: 'Cropway',
        headerShown: getHeaderTitle(route),
        headerTitleStyle: {
          fontSize: 32,
          fontFamily: 'serif',
          fontWeight: '700',
          color: '#fff0f5',
          paddingBottom: 10,
        },
        headerStyle:{
          borderBottomWidth: 1.3,
          backgroundColor: "#778899"
        }
        ,
        headerTitleAlign: 'center',
      })}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Buyer" component={Buyer} />
      <Stack.Screen name="Seller" component={Seller} />
      <Stack.Screen name="ValueAddedService" component={ValueAddedService} />
    </Stack.Navigator>
  );
};

const getHeaderTitle = ({route}: any) => {
  const headerShow = route.name === 'Dashboard' ? false : true;
  return headerShow;
};

export default MainScreen;
