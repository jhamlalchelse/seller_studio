import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SelectCategory from './SelectCategory'
import AddProduct from './AddProduct'

const Stack = createStackNavigator()
const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      // headerShown: false
    }}>
        <Stack.Screen  name= "Select Category" component={SelectCategory} />
        <Stack.Screen  name= "Add Product" component={AddProduct} />
    </Stack.Navigator>
  )
}

export default ProductStack