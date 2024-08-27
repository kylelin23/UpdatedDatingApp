import { StyleSheet, TextInput } from 'react-native';

import { Pressable, View, Text, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native'; // Import the hook

import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import { SafeAreaView } from 'react-native-safe-area-context';

import Modal from "react-native-modal";

import React, { useState } from 'react';


export function ExplorePage() {
  const navigation = useNavigation(); 
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [text, setText] = useState('');

  const likeButton = () => {
    setIsModalVisible(() => !isModalVisible);
  }

  return (
   // Explore Page: 
    <TouchableOpacity style={styles.screen} onPress={() => navigation.navigate('Name' as never)}>
        <View style = {styles.componentContainer}>
          <View style = {styles.information}>
            <Text style={styles.name}>Name</Text>
            <Text style = {styles.details}>Age, Location, Pronouns</Text>
          </View>
          <View>
            <Pressable onPress={likeButton}>
              <Text style = {styles.likeButton}>Like</Text>
            </Pressable>
          </View>
        </View>
        <Modal isVisible={isModalVisible}>
          <View style = {styles.profileContainer}>
            <TextInput 
            style = {styles.input} 
            placeholder = "Send a message! " 
            onChangeText={setText} 
            selectionColor = 'gold'
            multiline
            value={text}
            ></TextInput>
            <Pressable onPress={likeButton} >
              <Text style = {styles.backButton}>Back</Text>
            </Pressable>
          </View>
        </Modal>
      </TouchableOpacity>
  );
}

export function ProfilePopUp() {
  return (
    <GestureHandlerRootView style = {styles.scrollContainer}>
      <SafeAreaView style = {styles.safeAreaView}>
        <ScrollView>
          <View style = {styles.profileContainer}>
            <View style = {styles.square}></View>
            <View style = {styles.promptContainer}>
              <Text style = {styles.description}>Name: Kyle</Text>
              <Text style = {styles.description}>Age: 18</Text>
              <Text style = {styles.description}>Location: San Jose</Text>
              <Text style = {styles.description}>School: Cal Poly SLO</Text>
              <Text style = {styles.description}>Roots: Singapore, Taiwan, Malaysia</Text>
            </View>
            <View style = {styles.square}></View>
            <View style = {styles.promptContainer}>
              <Text style = {styles.prompt}>Prompt 1: </Text>
              <Text style = {styles.description}>Answer 1</Text>
            </View>
            <View style = {styles.square}></View>
            <View style = {styles.promptContainer}>
              <Text style = {styles.prompt}>Prompt 2: </Text>
              <Text style = {styles.description}>Answer 2</Text>
            </View>
            <View style = {styles.bottom}></View>
          </View>
        </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: 'red'},
        headerTintColor: 'gold'
      }
        }>
        <Stack.Screen name=" " component={ExplorePage} options={{ headerShown: false }}/>
        <Stack.Screen name="Name" component={ProfilePopUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'gray',
    padding: 30,
  },

  name:{
    color: 'white',
    fontSize: 35,
  },

  information: {
    gap: 15
  },

  details: {
    fontSize: 20,
    color: 'white',
  },

  componentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  likeButton: {
    fontSize: 40,
    color: 'red'
  },

  scrollContainer: {
    flex: 1,
    backgroundColor: 'rgb(227, 123, 116)',
  }, 

  safeAreaView: {
    flex: 1,
  }, 

  square: {
    width: 300,
    height: 300,
    backgroundColor: 'gray',
    borderRadius: 15,
  },

  profileContainer: {
    alignItems: 'center',
    gap: 20,
  },

  description: {
    color: 'gold',
    fontSize: 20,
  }, 

  prompt: {
    color: 'gold', 
    fontSize: 30, 
    fontWeight: 'bold',
  },

  promptContainer: {
    width: 300,
    backgroundColor: 'red', 
    padding: 20,
    borderRadius: 15,
  },

  bottom: {
    height: 10,
  },

  backButton: {
    color: 'red',
    fontSize: 40,
  },

  input: {
    borderColor: 'gold',
    borderWidth: 1,
    backgroundColor: 'red',
    borderRadius: 15,
    width: '100%',
    height: 200,
    paddingHorizontal: 10,
    color: 'gold',
    fontSize: 20,
    paddingTop: 10,
  },
});
