import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Card = ({ logo, title, details }) => {
    return (
        <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: logo }} />
      <View style={styles.inner}>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.details}>{ details }</Text>
      </View>
    </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: "white",
        overflow: "hidden",
        flex: 1,
        borderRadius: 15,
    },
    logo: {
        width: "100%",
        height: 250,
    },
    inner: {
        padding: 20,
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: 100,
    },
    title: {
        fontSize: 28,
        margin: 10,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
      },
      details: {
        fontSize: 15,
        margin: 10,
        fontWeight: "bold",
        color: "blue",
        textAlign: "center",
      },
  })
  

  export default Card;