import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import { Dimensions, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

const styles = require('../styles/globalStyle.js');

export default function ColourSLider({ colour }) {
    const [current, setCurrent] = useState(0);
    const length = colour.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(colour) || colour.length <= 0) {
        return null;
    }

    return (
        <View style={styles.container}>
            {colour.map((colour, index) => {
                return (
                    <View
                        key={index}
                        className={
                            index === current
                                ? "opacity-[1] ease-in-out duration-500"
                                : "opacity-0"
                        }
                    >
                        {index === current && (
                            <TouchableHighlight
                                style={{
                                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                                    width: Dimensions.get('window').width * 0.5,
                                    height: Dimensions.get('window').width * 0.5,
                                    backgroundColor: `${colour.hex}`,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    //visibility: `${colour.visibility}`,
                                }}
                                underlayColor='#ccc'
                                onPress={() => alert(`${colour.name}`)}
                            >
                                <Text></Text>
                            </TouchableHighlight>
                        )
                        }
                    </View>
                );
            })}
            <Pressable
                onPress={nextSlide}
                style={styles.button}
            >
                <Text style={styles.text}>Next Colour!</Text>
            </Pressable>
        </View >
    );
};