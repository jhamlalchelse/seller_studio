import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import DashBoardDrawer from './Dashboard/DashBoardDrawer';
import MainScreen from './MainScreen/MainScreen';

const Drawer = createDrawerNavigator();
const RootDrawerNav = ({route}: any) => {
  return (
    <Drawer.Navigator
      screenOptions={route => ({
        headerShown: false,
      })}>
      <Drawer.Screen name="MainScreen" component={MainScreen} />
      <Drawer.Screen name="Dashboard" component={DashBoardDrawer} />
      
    </Drawer.Navigator>
  );
};

const getHeaderTitle = ({route}: any) => {
  const headerShow = route.name === 'Dashboard' ? false : true;
  return headerShow;
};
export default RootDrawerNav;
