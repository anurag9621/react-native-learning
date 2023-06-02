import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.boxOfEnd}>
      <Text style={styles.firstText}>Why i know</Text>

      <Text onPress={() => navigation.navigate("About")}>
        i know i know but i dont want to tell u
      </Text>
      <Button
        onPress={() => navigation.navigate("About")}
        title="Next "
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  boxOfEnd: {
    

    borderRadius: 10,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  firstText: {},
  imageofkriti: {
    width: 200,
    height: 200,
  },
});

export default Home;
