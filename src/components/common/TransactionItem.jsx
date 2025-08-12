import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TransactionItem = ({ item }) => {
  const navigation = useNavigation();

  return (
  <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
    >
    <View style={styles.iconContainer}>
      <Image source={item.icon} style={styles.icon} />
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
    <Text style={[styles.amount, { color: item.amount.startsWith('+') ? '#25A969' : '#F95B51' }]}>
      {item.amount}
    </Text>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  date: {
    fontSize: 12,
    color: '#6B7280',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionItem;
