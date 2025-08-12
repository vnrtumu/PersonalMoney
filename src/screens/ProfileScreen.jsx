import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import COLORS from '../constants/colors';
import Diamond from '../assets/icons/diamond.svg';
import User from '../assets/icons/user.svg';
import Users from '../assets/icons/users.svg';
import Message from '../assets/icons/mail.svg';
import Security from '../assets/icons/security.svg';
import Data from '../assets/icons/data.svg';

// Mock data for profile items - replace icons with actual paths
const profileItems = [
  { icon: <Diamond width={16} height={16} />, text: 'Invite Friends' },
  { icon: <User width={16} height={16} />, text: 'Account info' },
  { icon: <Users width={16} height={16} />, text: 'Personal profile' },
  { icon: <Message width={16} height={16} />, text: 'Message center' },
  { icon: <Security width={16} height={16} />, text: 'Login and security' },
  {
    icon: <Data width={16} height={16} />,
    text: 'Mastrer Data',
    navigateTo: 'MasterData',
  },
];

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={require('../assets/HomeBg.png')} // Using the same home background
          style={styles.headerContainer}
          resizeMode="stretch"
        >
          <View style={styles.header}>
            {/* <TouchableOpacity></TouchableOpacity> */}
            <Text style={styles.headerTitle}>Profile</Text>
            <TouchableOpacity style={styles.bellIconContainer}>
              <Text style={styles.bellIcon}>🔔</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.profileInfoContainer}>
          <Image
            source={require('../assets/images/user5.png')} // Placeholder avatar
            style={styles.avatar}
          />
          <Text style={styles.profileName}>Enjelin Morgeana</Text>
          <Text style={styles.profileHandle}>@enjelin_morgeana</Text>
        </View>

        <View style={styles.menuContainer}>
          {profileItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() =>
                item.navigateTo && navigation.navigate(item.navigateTo)
              }
            >
              <View
                style={[
                  styles.menuIconContainer,
                  {
                    backgroundColor:
                      index === 0 ? COLORS.lightGreen : 'transparent',
                  },
                ]}
              >
                {item.icon}
              </View>
              <Text style={styles.menuText}>{item.text}</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  // headerContainer: {
  //   backgroundColor: COLORS.green,
  //   paddingBottom: 60, // Make space for the overlapping avatar
  //   borderBottomLeftRadius: 30,
  //   borderBottomRightRadius: 30,
  //   overflow: 'hidden',
  // },
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
    paddingTop: 50,
    paddingHorizontal: 20,
    marginTop: 30,
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
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginTop: -50, // Overlap the header
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 10,
  },
  profileHandle: {
    fontSize: 16,
    color: COLORS.green,
    marginTop: 4,
  },
  menuContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.black,
  },
  menuArrow: {
    fontSize: 20,
    color: COLORS.gray1,
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
