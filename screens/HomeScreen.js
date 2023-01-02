import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const styles = require("../styles/globalStyle.js");

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to our Colour Learning App!</Text>
            <Text style={styles.text}>This app will help you learn the names of colours in English.</Text>
        </View>
    );
}
