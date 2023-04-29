import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import OrderHistory from './OrderHistory/OrderHistory'

const Stack = createStackNavigator()
const OrderStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Order History' component={OrderHistory} />
    </Stack.Navigator>
  )
}

export default OrderStack