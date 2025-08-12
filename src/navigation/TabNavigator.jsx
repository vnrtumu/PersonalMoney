import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Import Icons
import Home from '../assets/icons/home.svg';
import HomeDark from '../assets/icons/homeDark.svg';
import Bar from '../assets/icons/bar.svg';
import BarDark from '../assets/icons/barDark.svg';
import Wallet from '../assets/icons/wallet.svg';
import WalletDark from '../assets/icons/walletDark.svg';
import User from '../assets/icons/user.svg';
import UserDark from '../assets/icons/userDark.svg';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 75,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <HomeDark width={size || 24} height={size || 24} />
            ) : (
              <Home width={size || 24} height={size || 24} />
            ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <BarDark width={size || 24} height={size || 24} />
            ) : (
              <Bar width={size || 24} height={size || 24} />
            ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <WalletDark width={size || 24} height={size || 24} />
            ) : (
              <Wallet width={size || 24} height={size || 24} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <UserDark width={size || 24} height={size || 24} />
            ) : (
              <User width={size || 24} height={size || 24} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
