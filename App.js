import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import LearnColours from "./screens/LearnColours";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#38639F",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: [{ display: "flex" }, null],
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-home" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>;
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#6A2DC6",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [{ display: "flex" }, null],
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Learn"
          component={LearnColours}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-school-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
