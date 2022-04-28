import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../image/doctor.jpg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.wearMasksStack}>
        <Text style={styles.wearMasks}>Wear Masks</Text>
        <Text style={styles.saveLives}>Save Lives</Text>
      </View>

      <Text style={styles.message}>
        Use proven information about the disease and take the necessary
        preventative measures.
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Case Details")}>
        <Image
          source={require("../image/right.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 500,
    height: 500,
    borderRadius: 200,
    marginTop: -72,
    alignSelf: "center",
  },
  wearMasks: {
    textAlign: "center",
    color: "#121212",
    fontSize: 30,
  },
  saveLives: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#121212",
    fontSize: 25,
  },

  message: {
    color: "#121212",
    textAlign: "center",
    marginTop: 12,
  },
  image2: {
    width: 64,
    height: 102,
    alignSelf: "center",
  },
});

export default Home;
