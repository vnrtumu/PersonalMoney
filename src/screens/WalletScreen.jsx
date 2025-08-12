import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import COLORS from '../constants/colors';

// Mock data for transactions and bills
const transactions = [
  {
    icon: require('../assets/images/upwork.png'),
    name: 'Upwork',
    date: 'Today',
    amount: '+ $ 850.00',
    type: 'income',
  },
  {
    icon: require('../assets/images/user1.png'),
    name: 'Transfer',
    date: 'Yesterday',
    amount: '- $ 85.00',
    type: 'expense',
  },
  {
    icon: require('../assets/images/paypal.png'),
    name: 'Paypal',
    date: 'Jan 30, 2022',
    amount: '+ $ 1,406.00',
    type: 'income',
  },
  {
    icon: require('../assets/images/youtube.png'),
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: '- $ 11.99',
    type: 'expense',
  },
];

const upcomingBills = [
  {
    icon: require('../assets/images/youtube.png'),
    name: 'Youtube',
    date: 'Feb 28, 2022',
  },
  {
    icon: require('../assets/images/lightning.png'),
    name: 'Electricity',
    date: 'Mar 28, 2022',
  },
  {
    icon: require('../assets/images/house.png'),
    name: 'House Rent',
    date: 'Mar 31, 2022',
  },
  {
    icon: require('../assets/images/spotify.png'),
    name: 'Spotify',
    date: 'Feb 28, 2022',
  },
];

const WalletScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Transactions');

  const renderContent = () => {
    if (activeTab === 'Transactions') {
      return transactions.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Image source={item.icon} style={styles.listItemIcon} />
          <View style={styles.listItemDetails}>
            <Text style={styles.listItemName}>{item.name}</Text>
            <Text style={styles.listItemDate}>{item.date}</Text>
          </View>
          <Text
            style={[
              styles.listItemAmount,
              { color: item.type === 'income' ? COLORS.green : COLORS.red },
            ]}
          >
            {item.amount}
          </Text>
        </View>
      ));
    } else {
      return upcomingBills.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Image source={item.icon} style={styles.listItemIcon} />
          <View style={styles.listItemDetails}>
            <Text style={styles.listItemName}>{item.name}</Text>
            <Text style={styles.listItemDate}>{item.date}</Text>
          </View>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>Pay</Text>
          </TouchableOpacity>
        </View>
      ));
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../assets/HomeBg.png')}
          style={styles.headerContainer}
          resizeMode="stretch"
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.headerBack}>‹</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Wallet</Text>
            <TouchableOpacity style={styles.bellIconContainer}>
              <Text style={styles.bellIcon}>🔔</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.contentContainer}>
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <Text style={styles.balanceAmount}>$ 2,548.00</Text>
            <View style={styles.actionButtonsContainer}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => navigation.navigate('ConnectWallet')}
              >
                <Text style={styles.actionButtonIcon}>+</Text>
                <Text style={styles.actionButtonText}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Image
                  source={require('../assets/images/qr.png')}
                  style={styles.payIcon}
                />
                <Text style={styles.actionButtonText}>Pay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Image
                  source={require('../assets/images/send.png')}
                  style={styles.sendIcon}
                />
                <Text style={styles.actionButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'Transactions' && styles.activeTab,
              ]}
              onPress={() => setActiveTab('Transactions')}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'Transactions' && styles.activeTabText,
                ]}
              >
                Transactions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'Upcoming Bills' && styles.activeTab,
              ]}
              onPress={() => setActiveTab('Upcoming Bills')}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'Upcoming Bills' && styles.activeTabText,
                ]}
              >
                Upcoming Bills
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>{renderContent()}</View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
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
  bellIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.white,
  },
  contentContainer: {
    marginTop: -80, // Overlap the header
    paddingHorizontal: 20,
  },
  balanceCard: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  balanceLabel: {
    fontSize: 16,
    color: COLORS.gray6,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.black,
    marginVertical: 10,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionButtonIcon: {
    fontSize: 24,
    color: COLORS.green,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 25,
    width: 50,
    height: 50,
    textAlign: 'center',
    lineHeight: 45,
  },
  payIcon: {
    width: 24,
    height: 24,
    margin: 13,
  },
  sendIcon: {
    width: 24,
    height: 24,
    margin: 13,
  },
  actionButtonText: {
    marginTop: 5,
    fontSize: 14,
    color: COLORS.gray6,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    marginVertical: 20,
    padding: 5,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: COLORS.green,
  },
  tabText: {
    fontSize: 16,
    color: COLORS.gray6,
  },
  activeTabText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  listContainer: {
    // No specific styles needed here, items are styled individually
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  listItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  listItemDetails: {
    flex: 1,
  },
  listItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  listItemDate: {
    fontSize: 12,
    color: COLORS.gray6,
  },
  listItemAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: COLORS.lightGreen,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
  },
  payButtonText: {
    color: COLORS.green,
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
});

export default WalletScreen;
