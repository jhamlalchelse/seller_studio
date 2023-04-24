import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import DrawerNavigation from './Components/DrawerNavigation/DrawerNavigation'

const App = () => {
  return (
    <NavigationContainer >
      <DrawerNavigation />
    </NavigationContainer>
  )
}

export default App