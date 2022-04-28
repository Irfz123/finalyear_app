import React, { useState, useEffect } from "react";
import { Linking } from "react-native";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

function CaseDetails({ navigation }) {
  const [data, setData] = useState([]);
  const url = "https://api.coronavirus.data.gov.uk/v1/data";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data[0]);
      });
  }, []);

  return (
    <ImageBackground
      source={require("../image/Night.jpg")}
      style={styles.container}
    >
      <View style={styles.boxContainer}>
        <View style={styles.topBox}>
          <View style={styles.firstBox}>
            <Image
              source={require("../image/covid1.png")}
              resizeMode="contain"
              style={{
                height: 65,
                width: 65,
                marginTop: -25,
                alignSelf: "center",
              }}
            ></Image>
            <Text style={{ fontSize: 15, marginTop: 10 }}>New Confirmed</Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {data && data.latestBy}
            </Text>
          </View>
          <View style={styles.secBox}>
            <Image
              source={require("../image/death.png")}
              resizeMode="contain"
              style={{
                height: 65,
                width: 65,
                marginTop: -25,
                alignSelf: "center",
              }}
            ></Image>
            <Text style={{ fontSize: 15, marginTop: 10 }}>New Deaths</Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {data && data.deathNew}
            </Text>
          </View>
        </View>

        <View style={styles.thirdBox}>
          <Image
            source={require("../image/test.png")}
            resizeMode="contain"
            style={{ height: 65, width: 65, alignSelf: "center" }}
          ></Image>
          <Text style={{ alignSelf: "center", fontSize: 20 }}>
            Check for covid
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Check Covid")}>
            <Image
              source={require("../image/next.png")}
              resizeMode="contain"
              style={{ height: 45, width: 45, marginTop: 10 }}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.fourthBox}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Book Online Consultation
          </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.nhs.uk/service-search/find-a-gp/")
            }
          >
            <View style={styles.bordercontainer}>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  textAlign: "center",
                }}
              >
                Here
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.fifthBox}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Order Test Kit
          </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://test-for-coronavirus.service.gov.uk/order-lateral-flow-kits/country"
              )
            }
          >
            <View style={styles.bordercontainer}>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  textAlign: "center",
                }}
              >
                Here
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 700,
  },

  boxContainer: {
    width: 350,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
  topBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  firstBox: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderRadius: 20,
    backgroundColor: "white",
  },
  secBox: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderRadius: 20,
    backgroundColor: "white",
  },
  thirdBox: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fourthBox: {
    marginTop: 30,
    paddingHorizontal: 55,
    paddingVertical: 30,
    borderRadius: 20,
    backgroundColor: "white",
  },
  fifthBox: {
    marginTop: 30,
    paddingHorizontal: 55,
    paddingVertical: 30,
    borderRadius: 20,
    backgroundColor: "white",
  },
  bordercontainer: {
    borderWidth: 2,
    width: 60,
    marginTop: 5,
    alignSelf: "center",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "#ba55d3",
  },
});

export default CaseDetails;
