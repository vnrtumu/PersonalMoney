import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import BalanceCard from '../components/home/BalanceCard';
import TransactionList from '../components/home/TransactionList';
import SendAgain from '../components/home/SendAgain';
import { useNavigation } from '@react-navigation/native';
import PlusIcon from '../assets/icons/Plus.svg';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ImageBackground
          source={require('../assets/HomeBg.png')}
          style={styles.headerContainer}
          resizeMode="stretch"
        >
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Good afternoon,</Text>
              <Text style={styles.userName}>Enjelin Morgeana</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.bellIconContainer}
                onPress={() => navigation.navigate('AddExpense')}
              >
                <PlusIcon width={24} height={24} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bellIconContainer}>
                <Text style={styles.bellIcon}>🔔</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <BalanceCard style={{ marginTop: -100, marginBottom: 20 }} />
        <TransactionList />
        <SendAgain />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // A light grey background for the body
  },
  scrollView: {
    paddingBottom: 20,
  },
  headerContainer: {
    paddingBottom: 100, // Make space for the overlapping card
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50, // Adjust for status bar
    paddingBottom: 20,
    marginTop: 20,
  },
  greeting: {
    color: 'white',
    fontSize: 16,
  },
  userName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bellIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 12,
    marginRight: 3,
  },
  bellIcon: {
    fontSize: 22,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: -20,
    alignSelf: 'center',
    zIndex: 0,
  },
});

export default HomeScreen;
