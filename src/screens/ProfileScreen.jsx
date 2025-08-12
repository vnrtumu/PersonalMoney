import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Alert,
} from 'react-native';
import COLORS from '../constants/colors';
import Diamond from '../assets/icons/diamond.svg';
import User from '../assets/icons/user.svg';
import Users from '../assets/icons/users.svg';
import Message from '../assets/icons/mail.svg';
import Security from '../assets/icons/security.svg';
import Data from '../assets/icons/data.svg';
import Storage from '../utils/Storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import supabase from '../utils/supabase';
import { useNavigation } from '@react-navigation/native';

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
  { icon: <Data width={16} height={16} />, text: 'Logout' },
];

const ProfileScreen = ({}) => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  const handleSignOut = async () => {
    console.log('hi i am logging out..........');

    try {
      // 1. Clear local data first to prevent automatic re-login
      await Storage.clearData('user');

      // 2. Sign out from external services
      await GoogleSignin.signOut();
      await supabase.auth.signOut();

      // 3. Navigate to the Onboarding/Login screen
      Alert.alert('Signed Out', 'You have been signed out successfully.');
      navigation.replace('Onboarding'); // Go back to the very first screen
    } catch (error) {
      console.error('Sign Out Error:', error);
      Alert.alert('Error', 'Failed to sign out. Please try again.');
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await Storage.getData('user');
      setUser(userData);
    };

    fetchUser();
  }, []);
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
            source={{
              uri: user?.user_metadata?.picture || 'https://i.pravatar.cc/150',
            }}
            style={styles.avatar}
          />
          <Text style={styles.profileName}>
            {user?.user_metadata?.full_name || 'Guest'}
          </Text>
          <Text style={styles.profileHandle}>{user?.email || 'No email'}</Text>
        </View>

        <View style={styles.menuContainer}>
          {profileItems.map((item, index) =>
            item.text == 'Logout' ? (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={handleSignOut}
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
            ) : (
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
            ),
          )}
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
