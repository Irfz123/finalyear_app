import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Questions from "./Questions";
// import { firestore, database } from "../config";

function CheckCovid({ navigation }) {
  const [checkedQuestions, setCheckedQuestions] = useState([]);

  const question = [
    {
      id: "3ed2g3",
      q: "Age 60+",
      imgs: "https://cdn-icons-png.flaticon.com/512/1533/1533913.png",
    },
    {
      id: "sgf6fd",
      q: "cough",
      imgs: "https://cdn-icons-png.flaticon.com/512/1533/1533913.png",
    },
    {
      id: "sfd56d",
      q: "Fever",
      imgs: "https://cdn-icons-png.flaticon.com/512/1533/1533913.png",
    },
    {
      id: "5484rg",
      q: "Sore Throat",
      imgs: "https://cdn-icons-png.flaticon.com/512/1533/1533913.png",
    },
    {
      id: "sdf68s",
      q: "Shortness of breath",
      imgs: "https://cdn-icons-png.flaticon.com/512/1533/1533913.png",
    },
    {
      id: "fkew33",
      q: "Headache",
      imgs: "https://cdn-icons-png.flaticon.com/512/1533/1533913.png",
    },
  ];

  const number = ["1", "2", "3", "4", "5", "6"];

  const renderNumbers = () =>
    number.map((item, index) => (
      <View key={index} style={styles.num}>
        <Text
          style={{
            paddingTop: 5,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {item}
        </Text>
      </View>
    ));

  const selectedQuestion = (val) => {
    const questionId = val.id;
    const index = checkedQuestions.findIndex((i) => i.id === questionId);

    if (index === -1) {
      setCheckedQuestions([...checkedQuestions, val]);
    } else {
      const filteredQuestions = checkedQuestions.filter(
        (item) => item.id !== questionId
      );
      setCheckedQuestions(filteredQuestions);
    }
  };

  const renderQuestions = () =>
    question.map((item, index) => (
      <Questions key={index} item={item} selectedQuestion={selectedQuestion} />
    ));

  const handleClick = () => {
    navigation.navigate("Yes Result");
  };

  return (
    <ImageBackground
      source={require("../image/Night.jpg")}
      style={styles.background}
    >
      <View style={{ flexDirection: "row" }}>
        <View>{renderNumbers()}</View>
        <View>{renderQuestions()}</View>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.submitBtn}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: 700,
  },
  num: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    marginTop: 26,
    marginBottom: 15,
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#D3B5E5",
  },
  submitBtn: {
    backgroundColor: "#D3B5E5",
    color: "white",
    fontWeight: "bold",
    width: 120,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    marginTop: 40,
    textAlign: "center",
    fontSize: 16,
  },
});

export default CheckCovid;
