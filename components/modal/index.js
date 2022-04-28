import React, { useState, useEffect } from "react";
import {
  Linking,
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from "react-native";

const CustomModal = ({ modalStatus, modalVisible, title, data }) => {
  const [isModalVisible, setIsModalVisible] = useState(modalVisible);

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => modalStatus(false)}
          >
            <Image
              source={require("../../image/icons/close.png")}
              resizeMode="contain"
              style={styles.closeBtn}
            ></Image>
          </Pressable>
          <Text style={styles.title}>{title}</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Text style={styles.modalListItem}>
                {"\u2022" + " "}
                {item.key}
              </Text>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    display: "flex",
    width: 300,
    height: 450,
    borderRadius: 20,
    backgroundColor: "tomato",
  },
  modalListItem: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
  },
  closeBtn: {
    height: 15,
    width: 15,
    marginTop: 20,
    marginRight: 20,
    alignSelf: "flex-end",
  },
});

export default CustomModal;
