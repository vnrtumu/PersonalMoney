import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import UserAvatar from '../common/UserAvatar';
import PlusIcon from '../../assets/icons/Plus.svg';
import COLORS from '../../constants/colors';

const users = [
  { id: '1', source: require('../../assets/images/user1.png') },
  { id: '2', source: require('../../assets/images/user2.png') },
  { id: '3', source: require('../../assets/images/user3.png') },
  { id: '4', source: require('../../assets/images/user4.png') },
];

const SendAgain = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Send Again</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.usersContainer}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserAvatar source={item.source} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.addButton}>
        <PlusIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
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
  usersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.gradientEnd,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default SendAgain;
