import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FlipCard from 'react-native-flip-card';
import { AntDesign, SimpleLineIcons, Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import Randomize from './Randomize';
import Encourage from './Encourage';
import Flashcard from './Flashcard';

export default function App() {
  return (
    <AppNavigator />
  );
}

const fretboard = require('./assets/fretboard.png');
const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={ReadyScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Flashcards"
          component={FlashcardTemplateScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="book-open" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Documentation"
          component={DocumentationScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-document-text-outline" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const ReadyScreen = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Ready to start learning the guitar?</Text>
      <Button
        color="#841584"
        title="Begin quiz"
        onPress={() => nav.navigate('Flashcards')}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const FlashcardTemplateScreen = () => {
  const [studyNote, setStudyNote] = useState('A');
  const [message, setMessage] = useState("Keep it up, you're doing great!");

  const handleButtonClick = (props) => {
    const randomNextNote = Randomize(props);
    setStudyNote(randomNextNote);

    const encouragingMessage = Encourage(message);
    setMessage(encouragingMessage);
  }

  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C1', 'D1', 'E1'];
  const index = notes.indexOf(studyNote);

  return (
    <>
      <FlashcardScreen
        note={studyNote}
        message={message}
      />
      <Button
          title="Next"
          onPress={ () => handleButtonClick(index)}
      />
    </>
  );
}

const FlashcardScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image source={fretboard} style={styles.fretboardImage}/>
      <TouchableOpacity
          style={styles.highlightNote(props.note)}>
      </TouchableOpacity>
      <Flashcard
        note={props.note}
        message={props.message}
      />
    </View>
  );
};


const DocumentationScreen = () => (
  <View style={styles.container}>
    <Text>There will be Documentation here.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24
  },

  welcomeText: {
    fontWeight: 'bold', 
    fontSize: 38, 
    marginBottom: 50,
    textAlign: 'center'
  },

  fretboardImage: {
    width: '130%',
    height: '25%',
    right: 10,
    transform: [{ rotate: '90deg'}],
    justifyContent: 'center',
    marginTop: 8,
    position: 'absolute'
  },

  beginStudyButton: {
    position: 'absolute',
    bottom: 0
  },

  highlightNote: (note) => { 
    let noteTop;
    let noteLeft;
    switch (note) {
      case "C":
        noteTop = 183;
        noteLeft = -28;
        break;
      case "D":
        noteTop = 183;
        noteLeft = 35;
        break;
      case "E":
        noteTop = 148;
        noteLeft = -7;
        break;
      case "F":
        noteTop = 114;
        noteLeft = -49;
        break;
      case "G":
        noteTop = 183;
        noteLeft = -49;
        break;
      case "A":
        noteTop = 148;
        noteLeft = 15;
        break;
      case "B":
        noteTop = 148;
        noteLeft = -28;
        break;
      case "C1":
        noteTop = 114;
        noteLeft = 35;
        break;
      case "D1":
        noteTop = 250;
        noteLeft = -28;
      case "E1":
        noteTop = 250;
        noteLeft = 35;
        break;
    }

    return {
      width: 5,
      height: 5,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'aqua',
      top: noteTop,
      left: noteLeft,
      shadowColor: 'rgba(0, 0, 0, .4)',
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 1
    }
  }
});
