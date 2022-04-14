import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const ReadyScreen = () => {

  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold' }}>This is a fretboard map.</Text>
      <Image source={fretboard} style={styles.fretboardImage}/>
      <Text style={{ marginBottom: 50 }}>Ready to start learning?</Text>

      <Button
        color="#841584"
        title="Begin quizzing"
        onPress={() => nav.navigate('Study')}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const StudyScreen = () => (
  <View style={styles.container}>
    <Text>Study Here</Text>
    <Image source={favicon}/>
  </View>
);

const DocumentationScreen = () => (
  <View style={styles.container}>
    <Text>There will be Documentation here.</Text>
  </View>
);

const fretboard = require('./assets/fretboard.png');
const favicon = require('./assets/favicon.png');
const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First" component={ReadyScreen}/>
        <Tab.Screen name="Study" component={StudyScreen}/>
        <Tab.Screen name="Documentation" component={DocumentationScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24
  },

  fretboardImage: {
    width: 300,
    height: 100,
    // transform: [{ rotate: '90deg'}],
    justifyContent: 'center',
    marginTop: 8,
  },

  beginStudyButton: {
    width: 100,
    height:100,
    backgroundColor: 'aqua',
    borderColor: 'coral'
  }
});
