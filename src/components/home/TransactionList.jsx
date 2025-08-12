import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import TransactionItem from '../common/TransactionItem';

const transactions = [
  {
    id: '1',
    title: 'Upwork',
    date: 'Today',
    amount: '+ $850.00',
    icon: require('../../assets/images/upwork.png'),
  },
  {
    id: '2',
    title: 'Transfer',
    date: 'Yesterday',
    amount: '- $85.00',
    icon: require('../../assets/images/user1.png'),
  },
  {
    id: '3',
    title: 'Paypal',
    date: 'Jan 30, 2022',
    amount: '+ $1,406.00',
    icon: require('../../assets/images/paypal.png'),
  },
  {
    id: '4',
    title: 'Youtube',
    date: 'Jan 16, 2022',
    amount: '- $11.99',
    icon: require('../../assets/images/youtube.png'),
  },
];

const TransactionList = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Transactions History</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
    </View>
    <FlatList
      data={transactions}
      renderItem={({ item }) => <TransactionItem item={item} />}
      keyExtractor={item => item.id}
      scrollEnabled={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  seeAll: {
    color: '#6B7280',
  },
});

export default TransactionList;
