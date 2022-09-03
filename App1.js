import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <View style={styles.tableColumnHeader}>
            <Text style={styles.textHeader}>Monday, February 6, 2021!</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableColumnRegular}>
            <Text style={styles.textLineItem}>10:00 AM</Text>
          </View>
          <View style={styles.tableColumnRegular}>
            <Text style={styles.textLineItem}>12:00 PM</Text>
          </View>
          <View style={styles.tableColumnRegular}>
            <Text style={styles.textLineItem}>2 Hrs</Text>
          </View>
          <View style={styles.tableColumnRegular}>
            <Text style={{...styles.textLineItem, justifyContent: "flex-end"}}>$25.00</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableColumnRegular}>
            <Text style={styles.textLineItem}>1:00 PM</Text>
          </View>
          <View style={styles.tableColumnRegular}>
            <Text style={styles.textLineItem}>5:30 PM</Text>
          </View>
          <View style={styles.tableColumnRegular}>
            <Text style={styles.textLineItem}>4.5 Hrs</Text>
          </View>
          <View style={styles.tableColumnRegular}>
            <Text style={{...styles.textLineItem, justifyContent: "flex-end"}}>$56.25</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableColumnHeader}>
            <Text style={styles.textHeader}>Tuesday, February 7, 2021!</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableColumnRegular}>
            <Text style={styles.textLineItem}>9:00 AM</Text>
          </View>
          <View style={styles.tableColumnRegular}>
            <Text style={styles.textLineItem}>12:00 PM</Text>
          </View>
          <View style={styles.tableColumnRegular}>
            <Text style={styles.textLineItem}>3 Hrs</Text>
          </View>
          <View style={styles.tableColumnRegular}>
            <Text style={{...styles.textLineItem, justifyContent: "flex-end"}}>$37.50</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableColumnRegular}>
            <Text style={styles.textLineItem}>1:00 PM</Text>
          </View>
          <View style={styles.tableColumnRegular}>
            <Text style={styles.textLineItem}>5:30 PM</Text>
          </View>
          <View style={styles.tableColumnRegular}>
            <Text style={styles.textLineItem}>4.5 Hrs</Text>
          </View>
          <View style={styles.tableColumnRegular}>
            <Text style={{...styles.textLineItem, justifyContent: "flex-end"}}>$56.25</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  tableContainer: {
    flex: 1,
  },
  tableRow: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white"
  },
  tableColumnRegular: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#c7c7c7",
    alignItems: "center",
    height: 25,
    padding: 2
  },
  tableColumnHeader: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "tomato",
    height: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  textHeader: {
    color: "white"
  },
  textLineItem: {
    color: "black"
  }
});