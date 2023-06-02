import React from "react";
import { Text, StyleSheet, View,Button } from "react-native";


const About = ({ navigation }) => {
  return (
    <View style={styles.boxOfEnd}>
      <Text style={styles.firstText}>Why i love </Text>
      <Text onPress={() => navigation.navigate("Gosome")}>
        i know i know but i dont want to tell u
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  boxOfEnd: {

    height: 500,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
    firstText: {
      
  },
  imageofkriti: {
    width: 200,
    height: 200,
  },
});

export default About;
