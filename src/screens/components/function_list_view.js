import React, { useState, useEffect } from "react";
import client from "./../../api/client";
import Card from "./shared/card";
import { StyleSheet, SafeAreaView, View,Text, Image, TouchableOpacity, FlatList } from "react-native";


const ListView = ({ navigation }) => {
    const [data, setData] = useState([]);
    const getList = async () => {
      console.log(client);
      const response = await client.get("/api");
      setData(response.data);
    };

    useEffect(() => {
        getList();
      }, []);

    const mytext = "by ProgramWithUs"
    return (
        <SafeAreaView>
        <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Detail", { objurl: item.absolute_url, hey: "Best Pizza" });
              }}
            >
              <Card
                logo={item.logo_image}
                title={item.pizzeria_name}
                details={item.city}
            />
            </TouchableOpacity>
          );
        }}
      />
      </View>
    </SafeAreaView>
    );
    }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    baseText: {
      color: "navy",
      fontSize: 30,
      fontStyle: "italic",
    },
    newText:{
      color: "red",
    },
    pizzaImage: {
      width: 200,
      height: 200,
    },
    itemText: {
        color: "green",
        fontSize: 20,
      },
      container: {
        backgroundColor: "#eeeeee",
        padding: 20,
      }
  })
  

  export default ListView;