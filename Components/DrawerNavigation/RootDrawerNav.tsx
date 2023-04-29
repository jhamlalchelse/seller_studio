import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Text } from 'react-native'
import MainScreen from '../StackNavigation/MainScreen'
import ProductStack from '../Product/ProductStack'
import OrderStack from '../Order/OrderStack'

const Drawer = createDrawerNavigator()
const RootDrawerNav = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerTitle : "Cropway",
      headerTitleStyle:{
        fontSize: 32,
        fontFamily: 'serif',
        fontWeight: '700',
        color:"#4682b4",
      },
      headerTitleAlign: 'center',
    }}>
      <Drawer.Screen name='MainScreen' component={MainScreen} />
      <Drawer.Screen name='Product' component={ProductStack} />
      <Drawer.Screen name='Order' component={OrderStack} />
    </Drawer.Navigator>
  )
}

export default RootDrawerNav