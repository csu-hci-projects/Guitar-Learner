import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { useState } from 'react';

 
export default function Flashcard(props) {
    const [cardText, setCardText] = useState("What note is behind the blue highlight?");
    const [cardState, setCardState] = useState("front");

    const handleFrontTap = (props) => {
        
    }

    return (
        <>
            <TouchableOpacity 
                style={styles.flashcard}
                onPress={ () => handleFrontTap(props)}
            >
                <Text style={styles.flashcardText}>{cardText}</Text>
            </TouchableOpacity>
        </>
        );
}

const BackSide = (props) => {
    let note = props.note;
    switch (note) {
        case "C1":
        note = "C";
        break;
        case "D1":
        note = "D";
        break;
        case "E1":
        note = "E";
        break;
    }
    return (
        <View style={styles.flashcard}>
            <Text style={styles.flashcardText}>{note}</Text>
            <Text style={styles.flashcardText}>{props.message}</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    flashcard: {
        width: 105,
        height: 100,
        top: 250,
        right: 47,
        shadowColor: 'rgba(0, 0, 0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        backgroundColor: '#F7E2E2',
        position: 'absolute'
      },
    
    flashcardText: {
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 10
    }
});