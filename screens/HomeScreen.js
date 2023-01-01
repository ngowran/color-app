import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const styles = require("../styles/globalStyle.js");

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to the Colour Learning App1</Text>
        </View>
    );
}
