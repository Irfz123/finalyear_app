import { StyleSheet, Image } from "react-native";

const ThumbsDown = () => {
  return (
    <Image
      source={require("../../image/icons/no.png")}
      resizeMode="contain"
      style={[styles.thumbsDown]}
    ></Image>
  );
};

const styles = StyleSheet.create({
  thumbsDown: {
    width: 30,
    height: 30,
    marginRight: 5,
    transform: [{ rotateZ: "36deg" }],
  },
});

export default ThumbsDown;
