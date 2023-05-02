import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import RootDrawerNav from './Components/RootDrawerNav'

const App = () => {
  return (
    <NavigationContainer >
      <RootDrawerNav />
    </NavigationContainer>
  )
}

export default App