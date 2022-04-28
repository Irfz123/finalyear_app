import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import CaseDetails from "./components/CaseDetails";
import CheckCovid from "./components/CheckCovid";
import YesResult from "./components/YesResult";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Case Details" component={CaseDetails} />
        <Stack.Screen name="Check Covid" component={CheckCovid} />
        <Stack.Screen name="Yes Result" component={YesResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
