import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UpArrow from '../../assets/icons/up-arrow.svg';
import DownArrow from '../../assets/icons/down-arrow.svg';
import DropDownUp from '../../assets/icons/dropDownUp.svg';

const BalanceCard = ({ style }) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.balanceContainer}>
        <View style={styles.balanceHeader}>
          <Text style={styles.balanceTitle}>Total Balance</Text>
          <DropDownUp width={16} height={16} />
        </View>
        <Text style={styles.balanceAmount}>$2,548.00</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <View style={styles.iconBackground}>
            <UpArrow width={20} height={20} />
          </View>
          <View style={styles.footerTextContainer}>
            <Text style={styles.footerTitle}>Income</Text>
            <Text style={styles.footerAmount}>$1,840.00</Text>
          </View>
        </View>
        <View style={styles.footerItem}>
          <View style={styles.iconBackground}>
            <DownArrow width={20} height={20} />
          </View>
          <View style={styles.footerTextContainer}>
            <Text style={styles.footerTitle}>Expenses</Text>
            <Text style={styles.footerAmount}>$284.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2E7E76',
    borderRadius: 28,
    padding: 25,
    marginHorizontal: 16,
    marginTop: 16,
  },
  balanceContainer: {
    marginBottom: 30,
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  balanceTitle: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 8,
    marginRight: 10,
  },
  footerTextContainer: {},
  footerTitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    marginBottom: 4,
  },
  footerAmount: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BalanceCard;
