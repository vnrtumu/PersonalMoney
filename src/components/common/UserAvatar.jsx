import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const UserAvatar = ({ source }) => (
  <View style={styles.container}>
    <Image source={source} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default UserAvatar;
