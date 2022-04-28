import { useState } from "react";
import ThumbsUp from "./thumbIcons/ThumbsUp";
import ThumbsDown from "./thumbIcons/ThumbsDown";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Questions = ({ item, selectedQuestion }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (item) => {
    setIsChecked(!isChecked);
    selectedQuestion(item);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={{ fontSize: 20, color: "#ba55d3", fontWeight: "bold" }}>
          {item.q}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => handleClick(item)}>
          {isChecked ? <ThumbsUp /> : <ThumbsDown />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    width: 330,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    marginLeft: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    marginTop: 20,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Questions;
