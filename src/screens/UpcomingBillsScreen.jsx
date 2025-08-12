import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Modal,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import COLORS from '../constants/colors';

const UpcomingBillsScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [bills, setBills] = useState([]);

  // Form state
  const [billName, setBillName] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  const handleAddBill = () => {
    if (billName.trim() && billAmount.trim()) {
      const newBill = {
        id: Date.now().toString(),
        name: billName,
        amount: billAmount,
        date: paymentDate || 'N/A',
      };
      setBills([...bills, newBill]);
      // Reset form
      setBillName('');
      setBillAmount('');
      setPaymentDate('');
      setModalVisible(false);
    }
  };

  const handleDeleteBill = id => {
    setBills(bills.filter(bill => bill.id !== id));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../assets/HomeBg.png')}
        style={styles.headerContainer}
        resizeMode="stretch"
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.headerBack}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Upcoming Bills</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.addButton}>+</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <ScrollView style={{ width: '100%' }}>
              <Text style={styles.modalTitle}>Add Upcoming Bill</Text>

              <Text style={styles.label}>Bill Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Bill Name"
                value={billName}
                onChangeText={setBillName}
              />
              <Text style={styles.label}>Bill Amount</Text>
              <TextInput
                style={styles.input}
                placeholder="Bill Amount"
                value={billAmount}
                onChangeText={setBillAmount}
                keyboardType="numeric"
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
              <View style={styles.modalButtons}>
                <Button
                  title="Cancel"
                  onPress={() => setModalVisible(false)}
                  color={COLORS.red}
                />
                <Button title="Add" onPress={handleAddBill} />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <FlatList
        data={bills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.billItem}>
            <View>
              <Text style={styles.billName}>{item.name}</Text>
              <Text style={styles.billDate}>Due: {item.date}</Text>
            </View>
            <View style={styles.billRightContainer}>
              <Text style={styles.billAmount}>${item.amount}</Text>
              <TouchableOpacity onPress={() => handleDeleteBill(item.id)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No upcoming bills added yet.</Text>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  headerContainer: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
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
  addButton: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  label: {
    alignSelf: 'flex-start',
    color: COLORS.gray6,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.black,
  },
  calendarIcon: {
    fontSize: 20,
  },
  invoiceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.lightGray,
    marginBottom: 15,
  },
  addInvoiceIcon: {
    fontSize: 24,
    color: COLORS.gray6,
    marginRight: 5,
  },
  addInvoiceText: {
    fontSize: 16,
    color: COLORS.gray6,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  listContainer: {
    padding: 20,
  },
  billItem: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  billName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  billDate: {
    fontSize: 12,
    color: COLORS.gray6,
  },
  billRightContainer: {
    alignItems: 'flex-end',
  },
  billAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.red,
  },
  deleteButtonText: {
    color: COLORS.red,
    fontSize: 12,
    marginTop: 5,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    color: COLORS.gray6,
  },
});

export default UpcomingBillsScreen;
