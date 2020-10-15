import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
      },
      error: {
        color: "red",
        fontSize: 18,
        marginBottom: 7,
        fontWeight: "600",
        paddingLeft: 20,
      },
      textBox: {
        borderColor: "#CCCCCC",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20,
      },
      addButton: {
        borderWidth: 1,
        borderColor: "#007BFF",
        backgroundColor: "#007BFF",
        padding: 15,
      },
      container: {
        justifyContent: "center",
        backgroundColor: "#ffffff",
        width: "100%",
        height: "100%",
      },
    });
    export default styles;