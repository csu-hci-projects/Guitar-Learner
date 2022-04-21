import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FlipCard from 'react-native-flip-card';
import { AntDesign, SimpleLineIcons, Ionicons } from '@expo/vector-icons'; 
import Randomize from './Randomize';

export default function App() {
  return (
    <AppNavigator />
  );
}

const fretboard = require('./assets/fretboard.png');
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
          component={FlashcardScreen}
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

const FlashcardScreen = () => {

  const nav = useNavigation();

  const handleButtonClick = (props) => {
    console.log("hi " + props);
    console.log("result of Randomize():");
    console.log(Randomize(props));
  }

  return (
    <View style={styles.container}>
      <Image source={fretboard} style={styles.fretboardImage}/>
      {/* <Button
          style={{ top: 0 }}
          title="Begin"
          onPress={() => nav.navigate("StudyScreen")}
      /> */}
      <TouchableOpacity
          onPress={() => {
            console.log("hi");
            Randomize(1);
          }}
          style={styles.highlightA}>
        </TouchableOpacity>
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
            <Text style={{ textAlign:'center', fontWeight: 'bold' }}>A</Text>
            <Text></Text>
            <Text style={{ textAlign: 'center' }}>Keep it up, you've got it!</Text>
          </View>
        </FlipCard>
        <Button
          title="Next"
          onPress={ () => handleButtonClick(1)}
        />
    </View>
  );
};

// const StudyScreen = () => {
//   return (
//     <View style={styles.container}>
//         <Image source={fretboard} style={styles.fretboardImage}/>
//         <TouchableOpacity
//           onPress={() => {
//             console.log("hi");
//           }}
//           style={styles.highlightA}>
//         </TouchableOpacity>
//         <FlipCard
//           perspective={1000}
//           style={styles.flashcard}
//           flipHorizontal={true}
//           flipVertical={false}
//         >
//           <View>
//             <Text style={{ textAlign:'center' }}>What note is behind the blue highlight?</Text>
//           </View>
//           <View>
//             <Text style={{ textAlign:'center' }}>A</Text>
//           </View>
//         </FlipCard>
//       </View>
//   );
// };

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
    width: '128%',
    height: '20%',
    transform: [{ rotate: '90deg'}],
    justifyContent: 'center',
    marginTop: 8,
    position: 'absolute'
  },

  beginStudyButton: {
    position: 'absolute',
    bottom: 0
  },

  highlightA: {
    width: 5,
    height: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'aqua',
    top: 168,
    left: 13,
    shadowColor: 'rgba(0, 0, 0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1
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
  }
});
