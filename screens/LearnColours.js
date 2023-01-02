import { View, Text } from "react-native";
import React, { useState } from "react";
import ColourSLider from "./ColourSlider.js";
import { colourAttributes } from "../components/colourAttributes.js";

const styles = require("../styles/globalStyle.js");

const LearnColours = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Time to Learn!</Text>
      <View style={styles.center}>
        <Text style={styles.text}>Guess the colour</Text>
        <ColourSLider colour={colourAttributes} />
      </View>
    </View>
  );
};

export default LearnColours;
