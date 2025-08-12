import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  StatusBar,
} from 'react-native';
import COLORS from '../constants/colors';

const ConnectWalletScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Cards');

  const renderCardsContent = () => (
    <View>
      <ImageBackground
        source={require('../assets/images/cardBg.png')}
        style={styles.card}
        imageStyle={{ borderRadius: 15 }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.cardType}>Debit Card</Text>
          <Text style={styles.cardBank}>Mono</Text>
        </View>
        <Image
          source={require('../assets/images/Chip.png')}
          style={styles.cardChip}
        />

        <View style={{ marginTop: 'auto' }}>
          <Text style={styles.cardNumber}>6219 8610 2888 8075</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.cardHolder}>IRVAN MOSES</Text>
          <Text style={styles.cardExpiry}>22/01</Text>
        </View>
      </ImageBackground>
      <Text style={styles.formTitle}>Add your debit Card</Text>
      <Text style={styles.formSubtitle}>
        This card must be connected to a bank account under your name
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>NAME ON CARD</Text>
        <TextInput style={styles.input} value="IRVAN MOSES" />
      </View>
      <View style={styles.row}>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.inputLabel}>DEBIT CARD NUMBER</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.inputLabel}>CVC</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.inputLabel}>EXPIRATION MM/YY</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.inputLabel}>ZIP</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Card</Text>
      </TouchableOpacity>
    </View>
  );

  const renderAccountsContent = () => (
    <View>
      <TouchableOpacity style={[styles.accountItem, styles.activeAccountItem]}>
        <Image
          source={require('../assets/images/bank.png')}
          style={styles.accountIcon}
        />
        <View style={styles.accountDetails}>
          <Text style={styles.accountName}>Bank Link</Text>
          <Text style={styles.accountDesc}>
            Connect your bank account to deposit & fund
          </Text>
        </View>
        <Text style={styles.checkIcon}>✓</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountItem}>
        <Image
          source={require('../assets/images/currency.png')}
          style={styles.accountIcon}
        />
        <View style={styles.accountDetails}>
          <Text style={styles.accountName}>Microdeposits</Text>
          <Text style={styles.accountDesc}>Connect bank in 5-7 days</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountItem}>
        <Image
          source={require('../assets/images/paypal.png')}
          style={styles.accountIcon}
        />
        <View style={styles.accountDetails}>
          <Text style={styles.accountName}>Paypal</Text>
          <Text style={styles.accountDesc}>Connect you paypal account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

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
            <Text style={styles.headerTitle}>Connect Wallet</Text>
            <TouchableOpacity style={styles.bellIconContainer}>
              <Text style={styles.bellIcon}>🔔</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.contentContainer}>
          <View style={styles.cardWrapper}>
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'Cards' && styles.activeTab]}
                onPress={() => setActiveTab('Cards')}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'Cards' && styles.activeTabText,
                  ]}
                >
                  Cards
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tab,
                  activeTab === 'Accounts' && styles.activeTab,
                ]}
                onPress={() => setActiveTab('Accounts')}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'Accounts' && styles.activeTabText,
                  ]}
                >
                  Accounts
                </Text>
              </TouchableOpacity>
            </View>

            {activeTab === 'Cards'
              ? renderCardsContent()
              : renderAccountsContent()}
          </View>
        </View>
      </ScrollView>
      {activeTab === 'Accounts' && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  headerContainer: {
    paddingBottom: 80,
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
  bellIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 12,
  },
  bellIcon: {
    fontSize: 22,
  },
  contentContainer: {
    marginTop: -60,
    // paddingHorizontal: 20,
  },
  cardWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 5,
    marginBottom: 20,
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
  card: {
    height: 200,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardType: {
    color: COLORS.white,
    fontSize: 16,
  },
  cardBank: {
    color: COLORS.white,
    fontSize: 16,
    alignSelf: 'flex-end',
  },
  cardChip: {
    width: 40,
    height: 30,
    position: 'absolute',
    top: 60,
    left: 20,
  },
  cardNumber: {
    color: COLORS.white,
    fontSize: 22,
    letterSpacing: 2,
  },
  cardHolder: {
    color: COLORS.white,
    fontSize: 14,
  },
  cardExpiry: {
    color: COLORS.white,
    fontSize: 14,
    alignSelf: 'flex-end',
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 20,
  },
  formSubtitle: {
    fontSize: 14,
    color: COLORS.gray6,
    marginTop: 5,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 12,
    color: COLORS.green,
    marginBottom: 5,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    marginBottom: 10,
  },
  activeAccountItem: {
    backgroundColor: COLORS.lightGreen,
    borderColor: COLORS.green,
    borderWidth: 1,
  },
  accountIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  accountDetails: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountDesc: {
    fontSize: 12,
    color: COLORS.gray6,
  },
  checkIcon: {
    fontSize: 20,
    color: COLORS.green,
  },
  footer: {
    padding: 20,
    backgroundColor: '#F5F6FA',
  },
  nextButton: {
    backgroundColor: COLORS.green,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  nextButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: COLORS.green,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConnectWalletScreen;
