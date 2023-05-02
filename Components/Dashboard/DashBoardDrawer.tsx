import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Home from './Home/Home';
import ProductStack from './Product/ProductStack';
import Profile from './Profile/Profile';
import CropwayGuide from './Guide/CropwayGuide';
import OrderHistory from './Order/OrderHistory';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
const DashBoardDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: 'Dashboard',
        headerTitleStyle: {
          fontSize: 32,
          fontFamily: 'serif',
          fontWeight: '700',
          color: '#4682b4',
        },
        headerTitleAlign: 'center',
      }}
      drawerContent={(props: any) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Product" component={ProductStack} />
      <Drawer.Screen name="Order" component={OrderHistory} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Cropway Guide" component={CropwayGuide} />
      <Drawer.Screen name="Abcd" component={Abcd} />
    </Drawer.Navigator>
  );
};

const Abcd = ({navigation}: any) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('MainScreen')}
        style={{
          backgroundColor: 'red',
          padding: 10,
          alignSelf: 'center',
          borderRadius: 10,
          marginTop: 10,
        }}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashBoardDrawer;
