import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
class TabTwo extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Tab Two Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 16,
  },
});
export default TabTwo;