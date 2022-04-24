import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';


export default function Randomize(props) {
    let randomNum = Math.floor(Math.random() * 10);
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C1', 'D1', 'E1'];
    while (randomNum === props) {
        randomNum = Math.floor(Math.random() * 10);
    }
    return notes[randomNum];
}
