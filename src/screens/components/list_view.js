import React, { Component } from "react";
import client from "./../../api/client";
import { StyleSheet, SafeAreaView, Text, Image, Button, FlatList } from "react-native";


class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }
    async componentDidMount() {
        try {
          const response = await client.get("/");
          if (!response.ok) {
            this.setState({ data: response.data });
          }
        }catch (error) {
          console.log(error);
        }
    }
    render() {
    const { data } = this.state;  
    const mytext = "by ProgramWithUs"
    return (
    <SafeAreaView style={styles.container}>
    <Image
        style={styles.pizzaImage}
        source={{
          uri: "https://bit.ly/book-pizza",
        }}
      />
      <Text style={styles.baseText}>Pizza vs. Pizz App</Text>
      <Text style={styles.newText}>{mytext}</Text>
      <Text>{data.length} Pizzerias</Text>
      <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={styles.itemText}>
              {item.pizzeria_name}, {item.city}
            </Text>
          )}
        />
      <Button
          title="list Item, Click for Details"
          onPress={() => this.props.navigation.navigate("Detail")}
        />
    </SafeAreaView>
    );
    }
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
      }
  })
  

  export default ListView;