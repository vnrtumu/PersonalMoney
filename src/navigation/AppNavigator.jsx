import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import TabNavigator from './TabNavigator';
import ConnectWalletScreen from '../screens/ConnectWalletScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';
import MasterDataScreen from '../screens/MasterDataScreen';
import IncomeCategoryScreen from '../screens/IncomeCategoryScreen';
import ExpenseCategoryScreen from '../screens/ExpenseCategoryScreen';
import UpcomingBillsScreen from '../screens/UpcomingBillsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
        <Stack.Screen name="ConnectWallet" component={ConnectWalletScreen} />
        <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
        <Stack.Screen name="MasterData" component={MasterDataScreen} />
        <Stack.Screen name="IncomeCategory" component={IncomeCategoryScreen} />
        <Stack.Screen name="ExpenseCategory" component={ExpenseCategoryScreen} />
        <Stack.Screen name="UpcomingBills" component={UpcomingBillsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
