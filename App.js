import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ProgressBarAndroidComponent } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlipCard from 'react-native-flip-card';
import { AntDesign, SimpleLineIcons, Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import Randomize from './Randomize';
import { highlightA, highlightC } from './NoteStyles';

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
  const nav = useNavigation();
  const [studyNote, setStudyNote] = useState('A');
  const [noteStyle, setNoteStyle] = useState("highlightA");

  const handleButtonClick = (props) => {
    const randomNextNote = Randomize(props);
    setStudyNote(randomNextNote);
    let noteStyleString = `highlight${randomNextNote}`;
    setNoteStyle(noteStyleString);
  }

  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C1', 'D1', 'E1'];
  const index = notes.indexOf(studyNote);

  return (
    <>
      <FlashcardScreen
        note={studyNote}
        style={noteStyle}
      />
      <Button
          title="Next"
          onPress={ () => handleButtonClick(index)}
      />
    </>
  );
}

const FlashcardScreen = (props) => {

  console.log(props);

  return (
    <View style={styles.container}>
      <Image source={fretboard} style={styles.fretboardImage}/>
      <TouchableOpacity
          style={highlightA()}>
      </TouchableOpacity>
      <Flashcard note={props.note} />
    </View>
  );
};

function Flashcard(props) {
  return (
    <FlipCard
      perspective={1000}
      style={styles.flashcard}
      flipHorizontal={true}
      flipVertical={false}
    >
      <View>
        <Text style={{ textAlign:'center' }}>What note is behind the blue highlight?</Text>
      </View>
      <View>
        <Text style={{ textAlign:'center', fontWeight: 'bold' }}>{props.note}</Text>
        <Text></Text>
        <Text style={{ textAlign: 'center' }}>Keep it up, you've got it!</Text>
      </View>
    </FlipCard>
  );
}


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
    transform: [{ rotate: '90deg'}],
    justifyContent: 'center',
    marginTop: 8,
    position: 'absolute'
  },

  beginStudyButton: {
    position: 'absolute',
    bottom: 0
  },

  flashcard: {
    width: 100,
    height: 65,
    bottom: 400,
    right: 70,
    textAlign: 'center',
    shadowColor: 'rgba(0, 0, 0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    backgroundColor: '#F7E2E2',
    position: 'absolute'
  },

  highlightC: {
    width: 5,
    height: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'aqua',
    top: 182,
    left: -28,
    shadowColor: 'rgba(0, 0, 0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1
  },

  highlightA: {
    width: 5,
    height: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'aqua',
    top: 149,
    left: 15,
    shadowColor: 'rgba(0, 0, 0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1
  }
});
