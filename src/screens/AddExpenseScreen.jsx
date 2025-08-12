import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import COLORS from '../constants/colors';

// Mock data for the category dropdown
const categories = [
  { name: 'Netflix', icon: require('../assets/images/netflix.png') },
];

export default function AddExpenseScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.formContainer}
        keyboardShouldPersistTaps="handled"
      >
        <ImageBackground
          source={require('../assets/HomeBg.png')}
          style={styles.headerContainer}
          resizeMode="stretch"
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.headerButtonText}>‹</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Add Expense</Text>
            <TouchableOpacity>
              <Text style={styles.headerButtonText}>...</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.card}>
          {/* Name Input */}
          <Text style={styles.label}>NAME</Text>
          <TouchableOpacity style={styles.inputContainer}>
            <Image source={categories[0].icon} style={styles.inputIcon} />
            <Text style={styles.inputText}>{categories[0].name}</Text>
            <Text style={styles.dropdownIcon}>▾</Text>
          </TouchableOpacity>

          {/* Amount Input */}
          <Text style={styles.label}>AMOUNT</Text>
          <View style={[styles.inputContainer, styles.amountContainer]}>
            <Text style={styles.currencySymbol}>$</Text>
            <TextInput
              style={styles.amountInput}
              defaultValue="48.00"
              keyboardType="numeric"
            />
            <TouchableOpacity>
              <Text style={styles.clearButton}>Clear</Text>
            </TouchableOpacity>
          </View>

          {/* Description Input */}
          <Text style={styles.label}>DESCRIPTION</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Enter a description"
            multiline
            numberOfLines={4}
          />

          {/* Date Input */}
          <Text style={styles.label}>DATE</Text>
          <TouchableOpacity style={styles.inputContainer}>
            <Text style={styles.inputText}>Tue, 22 Feb 2022</Text>
            <Text style={styles.calendarIcon}>📅</Text>
          </TouchableOpacity>

          {/* Invoice Input */}
          <Text style={styles.label}>INVOICE</Text>
          <TouchableOpacity style={styles.invoiceButton}>
            <Text style={styles.addInvoiceIcon}>+</Text>
            <Text style={styles.addInvoiceText}>Add Invoice</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    paddingBottom: 60,
    marginTop: 30,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 16,
    marginTop: -100,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    color: '#A9A9A9',
    fontSize: 12,
    marginBottom: 8,
    marginTop: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },

  descriptionInput: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 100,
    fontSize: 16,
    textAlignVertical: 'top',
    color: '#000',
  },
  dropdownIcon: {
    fontSize: 16,
  },
  amountContainer: {
    paddingVertical: 8,
  },
  currencySymbol: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7E76',
    marginRight: 5,
  },
  amountInput: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  clearButton: {
    color: '#2E7E76',
    fontSize: 14,
  },
  calendarIcon: {
    fontSize: 20,
  },
  invoiceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderStyle: 'dashed',
    borderRadius: 10,
    paddingVertical: 20,
    marginTop: 10,
  },
  addInvoiceIcon: {
    fontSize: 20,
    color: '#A9A9A9',
    marginRight: 8,
  },
  addInvoiceText: {
    color: '#A9A9A9',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: COLORS.green,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
