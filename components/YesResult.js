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
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

  const modalStatus1 = (val) => {
    setModalVisible1(val);
  };

  const modalStatus2 = (val) => {
    setModalVisible2(val);
  };
  const modalStatus3 = (val) => {
    setModalVisible3(val);
  };
  const modalStatus4 = (val) => {
    setModalVisible4(val);
  };

  return (
    <ImageBackground
      source={require("../image/Night.jpg")}
      style={styles.background}
    >
      <View style={styles.Result}>
        <Text style={{ textAlign: "center" }}>HI</Text>
      </View>

      <Text style={styles.title}>Advice</Text>

      <View style={styles.Container}>
        <View style={styles.FirstBox}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible1(true)}
          >
            <Text>Feeling breathless</Text>

            <CustomModal
              modalStatus={modalStatus1}
              modalVisible={modalVisible1}
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
            onPress={() => setModalVisible2(true)}
          >
            <Text>Treating cough</Text>

            <CustomModal
              modalStatus={modalStatus2}
              modalVisible={modalVisible2}
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
        <View style={styles.ThirdBox}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible3(true)}
          >
            <Text>Treating cough</Text>

            <CustomModal
              modalStatus={modalStatus3}
              modalVisible={modalVisible3}
              title="Treating coooough"
              data={[
                {
                  key: "If you have a cough, it's best to avoid lying on your back. Lie on your side or sit upright instead.",
                },
                { key: "sitting upright in a chair" },
                { key: "relaxing your shoulders, so you're not hunched" },
              ]}
            />
          </Pressable>
        </View>
        <View style={styles.FourthBox}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible4(true)}
          >
            <Text>Treating cough</Text>

            <CustomModal
              modalStatus={modalStatus4}
              modalVisible={modalVisible4}
              title="Treating cough"
              data={[
                { key: "sitting upright in a chair" },
                { key: "relaxing your shoulders, so you're not hunched" },
                {
                  key: "leaning forward slightly – support yourself by putting your hands on your knees or on something stable like a chair",
                },
              ]}
            />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: 700,
  },
  title: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 24,
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
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  SecBox: {
    width: 150,
    height: 150,
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  ThirdBox: {
    width: 150,
    height: 150,
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  FourthBox: {
    width: 150,
    height: 150,
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOpen: {},
});

export default YesResult;
