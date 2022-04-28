import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import CustomModal from "./modal";

function YesResult({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const modalStatus = (val) => {
    setModalVisible(val);
  };

  return (
    <ImageBackground
      source={require("../image/Night.jpg")}
      style={styles.background}
    >
      <View style={styles.Result}>
        <Text style={{ textAlign: "center" }}>HI</Text>
      </View>

      <Text>Advice</Text>

      <View style={styles.Container}>
        <View style={styles.FirstBox}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text>Feeling breathless</Text>

            <CustomModal
              modalStatus={modalStatus}
              modalVisible={modalVisible}
              title="Feeling breathless"
              data={[
                {
                  key: "breathing slowly in through your nose and out through your mouth, with your lips together like you're gently blowing out a candle",
                },
                { key: "sitting upright in a chair" },
                { key: "relaxing your shoulders, so you're not hunched" },
                {
                  key: "leaning forward slightly – support yourself by putting your hands on your knees or on something stable like a chair",
                },
              ]}
            />
          </Pressable>
        </View>

        <View style={styles.SecBox}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text>Treating cough</Text>

            <CustomModal
              modalStatus={modalStatus}
              modalVisible={modalVisible}
              title="Treating cough"
              data={[
                {
                  key: "If you have a cough, it's best to avoid lying on your back. Lie on your side or sit upright instead.",
                },
                { key: "sitting upright in a chair" },
                { key: "relaxing your shoulders, so you're not hunched" },
                {
                  key: "leaning forward slightly – support yourself by putting your hands on your knees or on something stable like a chair",
                },
              ]}
            />
          </Pressable>
        </View>
        <View style={styles.ThirdBox}></View>
        <View style={styles.FourthBox}></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: 700,
  },
  Result: {
    width: 350,
    height: 200,
    marginTop: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    backgroundColor: "white",
  },
  Container: {
    width: 350,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  FirstBox: {
    width: 150,
    height: 150,
    marginTop: 35,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  SecBox: {
    width: 150,
    height: 150,
    marginTop: 35,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  ThirdBox: {
    width: 150,
    height: 150,
    marginTop: 35,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  FourthBox: {
    width: 150,
    height: 150,
    marginTop: 35,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOpen: {},
});

export default YesResult;
