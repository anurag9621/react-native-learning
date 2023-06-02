import React from "react";
import { Text, StyleSheet, View ,Image, Button} from "react-native";
import kriti from "../assets/a.jpg"

const Home = ({ navigation }) => {
  return (
    <View style={styles.boxOfEnd}>
      <Text style={styles.firstText}>Why i love Kriti</Text>
      <Image style={styles.imageofkriti} source={kriti} />
      <Text>i dont know but i do</Text>
      <Text onPress={() => navigation.navigate('About')} >i know i know but i dont want to tell u</Text>
      <Button
        onPress={() => navigation.navigate('About')}
        title="Next "
        color={"red"}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  boxOfEnd: {
    flex:1,
    width: 300,
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
    firstText: {},
    imageofkriti: {
        width: 200,
        height:200
        
    },
    
});

export default Home;
