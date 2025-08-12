import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../constants/colors';
import BG from '../assets/BG.svg'; // Background SVG
import Man from '../assets/Man.svg'; // Person illustration SVG
import Coint from '../assets/Coint.svg';
import Donut from '../assets/Donut.svg';

export default function OnboardingScreen({ navigation }) {
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
            onPress={() => navigation.navigate('Main')}
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
