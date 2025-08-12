import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';

import COLORS from '../constants/colors';
import Income from '../assets/icons/Income.svg';
import Expense from '../assets/icons/Expense.svg';
import Bills from '../assets/icons/Bills.svg';

const MasterDataScreen = ({ navigation }) => {
  const masterDataItems = [
    { icon: <Income width={24} height={24} />, text: 'Income Category', navigateTo: 'IncomeCategory' },
    { icon: <Expense width={24} height={24} />, text: 'Expense Category', navigateTo: 'ExpenseCategory' },
    { icon: <Bills width={24} height={24} />, text: 'Create Upcoming Bills', navigateTo: 'UpcomingBills' },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../assets/HomeBg.png')}
        style={styles.headerContainer}
        resizeMode="stretch"
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.headerBack}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Master Data</Text>
          <View style={{ width: 20 }} />
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.card}>
          {masterDataItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                index === masterDataItems.length - 1 && {
                  borderBottomWidth: 0,
                },
              ]}
              onPress={() => item.navigateTo && navigation.navigate(item.navigateTo)}
            >
              <View style={styles.menuItemContent}>
                <View style={styles.menuIcon}>{item.icon}</View>
                <Text style={styles.menuItemText}>{item.text}</Text>
              </View>
              <Text style={styles.menuItemArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  headerContainer: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerBack: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: -50,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(230, 245, 238, 0.5)', // A light green background
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 16,
    color: COLORS.black,
  },
  menuItemArrow: {
    fontSize: 20,
    color: COLORS.gray6,
  },
});

export default MasterDataScreen;
