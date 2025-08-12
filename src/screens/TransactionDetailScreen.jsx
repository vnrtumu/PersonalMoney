import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import COLORS from '../constants/colors';

const TransactionDetailScreen = ({ route, navigation }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(true);
  // Mock data, to be replaced with route.params.transaction
  const transaction = {
    icon: require('../assets/images/upwork.png'),
    name: 'Upwork Escrow',
    type: 'Income',
    amount: 850.0,
    status: 'Income',
    from: 'Upwork Escrow',
    time: '10:00 AM',
    date: 'Feb 30, 2022',
    earnings: 870.0,
    fee: 20.0,
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../assets/HomeBg.png')}
          style={styles.headerContainer}
          resizeMode="stretch"
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.headerBack}>‹</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Transaction Details</Text>
            <TouchableOpacity>
              <Text style={styles.headerMore}>...</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.contentContainer}>
          <View style={styles.card}>
            <Image source={transaction.icon} style={styles.logo} />
            <View style={styles.tag}>
              <Text style={styles.tagText}>{transaction.type}</Text>
            </View>
            <Text style={styles.amount}>$ {transaction.amount.toFixed(2)}</Text>

            <TouchableOpacity
              style={styles.detailsHeader}
              onPress={() => setIsDetailsVisible(!isDetailsVisible)}
            >
              <Text style={styles.detailsTitle}>Transaction details</Text>
              <Text style={styles.detailsToggle}>
                {isDetailsVisible ? 'v' : '^'}
              </Text>
            </TouchableOpacity>

            {isDetailsVisible && (
              <>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Status</Text>
                  <Text style={[styles.detailValue, styles.incomeText]}>
                    {transaction.status}
                  </Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>From</Text>
                  <Text style={styles.detailValue}>{transaction.from}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Time</Text>
                  <Text style={styles.detailValue}>{transaction.time}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Date</Text>
                  <Text style={styles.detailValue}>{transaction.date}</Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Earnings</Text>
                  <Text style={styles.detailValue}>
                    $ {transaction.earnings.toFixed(2)}
                  </Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Fee</Text>
                  <Text style={styles.detailValue}>
                    - $ {transaction.fee.toFixed(2)}
                  </Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.totalRow}>
                  <Text style={styles.detailLabel}>Total</Text>
                  <Text style={styles.totalValue}>
                    $ {transaction.amount.toFixed(2)}
                  </Text>
                </View>
              </>
            )}
          </View>

          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>Download Receipt</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  headerContainer: {
    paddingBottom: 100,
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
  headerMore: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentContainer: {
    marginTop: -80,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  tag: {
    backgroundColor: COLORS.lightGreen,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  tagText: {
    color: COLORS.green,
    fontSize: 12,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 20,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  detailsToggle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.gray6,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    color: COLORS.gray6,
  },
  detailValue: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '500',
  },
  incomeText: {
    color: COLORS.green,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.gray,
    width: '100%',
    marginVertical: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  downloadButton: {
    borderColor: COLORS.green,
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  downloadButtonText: {
    color: COLORS.green,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionDetailScreen;
