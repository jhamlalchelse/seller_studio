import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Text } from 'react-native'
import Home from '../Home'

const Drawer = createDrawerNavigator()
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={Home} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation