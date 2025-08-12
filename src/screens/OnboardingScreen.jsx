import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../constants/colors';
import BG from '../assets/BG.svg'; // Background SVG
import Man from '../assets/Man.svg'; // Person illustration SVG
import Coint from '../assets/Coint.svg';
import Donut from '../assets/Donut.svg';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import supabase from '../utils/supabase';
import { useNavigation } from '@react-navigation/native';
import Storage from '../utils/Storage';

export default function OnboardingScreen({ navigation }) {
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '978040523635-cgqm8bi593ta2jmrsda17mcnr0loqdv1.apps.googleusercontent.com',
    });

    // Check if user is already signed in
    checkUserSignedIn();
  }, []);

  const checkUserSignedIn = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      console.log('data---->', data);

      if (error) throw error;

      if (data.session?.user) {
        const user = data.session.user;
        console.log('User session found:', user);
        await Storage.setData('user', user);

        navigation.replace('Main', {
          screen: 'Home',
          params: { user },
        });
      } else {
        console.log('No active session found.');
      }
    } catch (error) {
      console.error('Error checking for active session:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google Sign-In Success:', userInfo);

      if (userInfo.data.idToken) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: userInfo.data.idToken,
        });

        console.log('Supabase Auth Response:', { data, error });

        if (error) {
          Alert.alert('Error', error.message);
        } else {
          console.log('Signed in with Google successfully');
          await Storage.setData('user', data.user);
          navigation.replace('Main', {
            screen: 'Home',
            params: { user: data.user },
          });
        }
      } else {
        throw new Error('No ID token present!');
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Sign In Cancelled', 'User cancelled the login flow.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Sign In In Progress', 'Sign in is already in progress.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert(
          'Play Services Error',
          'Google Play services not available or outdated.',
        );
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.artContainer}>
        {/* Background circles SVG */}
        <BG width={340} height={340} style={styles.svgBg} />
        {/* Person illustration SVG */}
        <Man width={220} height={220} style={styles.personSvg} />
        {/* Coin and Donut SVGs, positioned */}
        <Coint width={64} height={64} style={styles.coinSvg} />
        <Donut width={64} height={64} style={styles.donutSvg} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Spend Smarter{'\n'}Save More</Text>
        <LinearGradient
          colors={[COLORS.gradientStart, COLORS.gradientEnd]}
          style={styles.button}
        >
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={handleGoogleSignIn}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.loginText}>
          Already Have Account?{' '}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate('Login')}
          >
            Log In
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray8,
    justifyContent: 'space-between',
  },
  artContainer: {
    alignItems: 'center',
    marginTop: 40,
    height: 340,
    justifyContent: 'center',
    position: 'relative',
  },
  svgBg: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: -170 }],
    zIndex: 0,
  },
  personSvg: {
    position: 'absolute',
    top: 60,
    left: '50%',
    transform: [{ translateX: -110 }],
    zIndex: 1,
  },
  coinSvg: {
    position: 'absolute',
    top: 80,
    left: 40,
    zIndex: 2,
  },
  donutSvg: {
    position: 'absolute',
    top: 80,
    right: 40,
    zIndex: 2,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.green,
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    borderRadius: 32,
    width: 320,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: COLORS.gray6,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 4,
  },
  buttonTouchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginText: {
    color: COLORS.green,
    fontSize: 16,
    marginTop: 8,
  },
  loginLink: {
    color: COLORS.gradientEnd,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
