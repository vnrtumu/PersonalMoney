import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {
  Svg,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
} from 'react-native-svg';
import COLORS from '../constants/colors';
import Download from '../assets/icons/download.svg';
import Sort from '../assets/icons/sort';
const { width } = Dimensions.get('window');

// Mock data for the chart
const chartData = [50, 60, 40, 80, 70, 90, 65, 75, 55];
const chartLabels = [
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
];

// Mock data for top spending
const spendingData = [
  {
    icon: require('../assets/images/starbucks.png'),
    name: 'Starbucks',
    date: 'Jan 12, 2022',
    amount: '- $ 150.00',
  },
  {
    icon: require('../assets/images/user1.png'),
    name: 'Transfer',
    date: 'Yesterday',
    amount: '- $ 85.00',
    highlighted: true,
  },
  {
    icon: require('../assets/images/youtube.png'),
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: '- $ 11.99',
  },
];

const StatisticsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Day');

  const renderChart = () => {
    const chartHeight = 200;
    const chartWidth = width - 40;
    const path = chartData
      .map((p, i) => {
        const x = (i / (chartData.length - 1)) * chartWidth;
        const y = chartHeight - (p / 100) * chartHeight;
        return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
      })
      .join(' ');

    const areaPath = `${path} L ${chartWidth},${chartHeight} L 0,${chartHeight} Z`;

    return (
      <View style={styles.chartContainer}>
        <Svg height={chartHeight} width={chartWidth}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor={COLORS.green} stopOpacity="0.3" />
              <Stop offset="1" stopColor={COLORS.green} stopOpacity="0" />
            </LinearGradient>
          </Defs>
          <Path d={path} stroke={COLORS.green} strokeWidth="2" fill="none" />
          <Path d={areaPath} fill="url(#grad)" />
          {/* Highlighted point */}
          <Circle
            cx={(2 / (chartData.length - 1)) * chartWidth}
            cy={chartHeight - (chartData[2] / 100) * chartHeight}
            r="5"
            fill={COLORS.green}
          />
        </Svg>
        <View style={styles.chartTooltip}>
          <Text style={styles.tooltipText}>$1,230</Text>
        </View>
        <View style={styles.chartLabelsContainer}>
          {chartLabels.map((label, index) => (
            <Text
              key={index}
              style={[styles.chartLabel, label === 'May' && styles.activeLabel]}
            >
              {label}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Statistics</Text>
        <TouchableOpacity>
          <Download width={16} height={16} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        {['Day', 'Week', 'Month', 'Year'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Expense</Text>
          <Text style={styles.dropdownArrow}>▾</Text>
        </TouchableOpacity>
      </View>

      {renderChart()}

      <View style={styles.spendingHeader}>
        <Text style={styles.spendingTitle}>Top Spending</Text>
        <TouchableOpacity>
          <Sort width={16} height={16} />
        </TouchableOpacity>
      </View>

      <View style={styles.spendingList}>
        {spendingData.map((item, index) => (
          <View
            key={index}
            style={[
              styles.spendingItem,
              item.highlighted && styles.highlightedItem,
            ]}
          >
            <Image source={item.icon} style={styles.spendingIcon} />
            <View style={styles.spendingDetails}>
              <Text
                style={[
                  styles.spendingName,
                  item.highlighted && styles.highlightedText,
                ]}
              >
                {item.name}
              </Text>
              <Text
                style={[
                  styles.spendingDate,
                  item.highlighted && styles.highlightedText,
                ]}
              >
                {item.date}
              </Text>
            </View>
            <Text
              style={[
                styles.spendingAmount,
                item.highlighted && styles.highlightedText,
              ]}
            >
              {item.amount}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerBack: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  downloadIcon: {
    width: 24,
    height: 24,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: COLORS.green,
  },
  tabText: {
    fontSize: 16,
    color: COLORS.gray6,
  },
  activeTabText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  filterContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
    marginTop: 20,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  dropdownText: {
    fontSize: 14,
    marginRight: 5,
  },
  dropdownArrow: {
    fontSize: 14,
  },
  chartContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  chartTooltip: {
    position: 'absolute',
    left: '25%',
    top: '20%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.green,
  },
  tooltipText: {
    color: COLORS.green,
    fontWeight: 'bold',
  },
  chartLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  chartLabel: {
    fontSize: 12,
    color: COLORS.gray6,
  },
  activeLabel: {
    color: COLORS.green,
    fontWeight: 'bold',
  },
  spendingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
  },
  spendingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  sortIcon: {
    width: 24,
    height: 24,
  },
  spendingList: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  spendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: COLORS.white,
  },
  highlightedItem: {
    backgroundColor: COLORS.green,
  },
  spendingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  spendingDetails: {
    flex: 1,
  },
  spendingName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  spendingDate: {
    fontSize: 12,
    color: COLORS.gray6,
  },
  spendingAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.red,
  },
  highlightedText: {
    color: COLORS.white,
  },
});

export default StatisticsScreen;
