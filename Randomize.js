import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';


export default function Randomize(props) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    while (randomNum === props) {
        console.log("Random number: ");
        console.log(randomNum);
        randomNum = Math.floor(Math.random() * 10) + 1;
    }
    console.log(randomNum);
    return randomNum;
}
