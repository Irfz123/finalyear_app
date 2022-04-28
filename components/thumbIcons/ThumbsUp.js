import { StyleSheet, Image } from "react-native";

const ThumbsUp = () => {
  return (
    <Image
      source={require("../../image/icons/yes.png")}
      resizeMode="contain"
      style={[styles.thumbsUp]}
    ></Image>
  );
};

const styles = StyleSheet.create({
  thumbsUp: {
    width: 30,
    height: 30,
    marginRight: 5,
    transform: [{ rotateZ: "36deg" }],
  },
});

export default ThumbsUp;
