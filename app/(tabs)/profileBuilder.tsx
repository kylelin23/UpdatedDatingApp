import React, { useContext, useState } from 'react';

import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Pressable, View, Text } from 'react-native';

import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import { SafeAreaView } from 'react-native-safe-area-context';

import Modal from "react-native-modal";

export default function ProfileBuilder() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible4, setIsModalVisible4] = useState(false);
  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const [isModalVisible6, setIsModalVisible6] = useState(false);
  const [isModalVisible7, setIsModalVisible7] = useState(false);
  const [text, setText] = useState('');

  const nameEditter = () => {
    setIsModalVisible(!isModalVisible);
  }
  const ageEditter = () => {
    setIsModalVisible2(!isModalVisible2);
  }
  const locationEditter = () => {
    setIsModalVisible3(!isModalVisible3);
  }
  const schoolEditter = () => {
    setIsModalVisible4(!isModalVisible4);
  }
  const rootsEditter = () => {
    setIsModalVisible5(!isModalVisible5);
  }
  const prompt1Editter = () => {
    setIsModalVisible6(!isModalVisible6);
  }
  const prompt2Editter = () => {
    setIsModalVisible7(!isModalVisible7);
  }
  return (
    <GestureHandlerRootView style = {styles.scrollContainer}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.screen}>
            <View style = {styles.row}>
              <TouchableOpacity onPress = {() => alert('Choose which photo to replace with')}>
                <View style = {styles.square}></View>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => alert('Choose which photo to replace with')}>
                <View style = {styles.square}></View>
              </TouchableOpacity>
            </View>
            <View style = {styles.row}>
            <TouchableOpacity onPress = {() => alert('Choose which photo to replace with')}>
                <View style = {styles.square}></View>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => alert('Choose which photo to replace with')}>
                <View style = {styles.square}></View>
              </TouchableOpacity>
            </View>
            <View style = {styles.row}>
              <TouchableOpacity onPress = {() => alert('Choose which photo to replace with')}>
                <View style = {styles.square}></View>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => alert('Choose which photo to replace with')}>
                <View style = {styles.square}></View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress = {nameEditter}>
            <View style = {styles.promptContainer}>
              <Text style = {styles.description}>Name: Kyle</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {ageEditter}>
            <View style = {styles.promptContainer}>
              <Text style = {styles.description}>Age: 18</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {locationEditter}>
            <View style = {styles.promptContainer}>
              <Text style = {styles.description}>Location: San Jose</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {schoolEditter}>
            <View style = {styles.promptContainer}>
              <Text style = {styles.description}>School: Cal Poly SLO</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {rootsEditter}>
            <View style = {styles.promptContainer}>
              <Text style = {styles.description}>Roots: Singapore, Taiwan, Malaysia</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {prompt1Editter}>
            <View style = {styles.promptContainer}>
              <Text style = {styles.description}>Prompt 1: </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {prompt2Editter}>
            <View style = {[styles.promptContainer2, styles.promptContainer]}>
              <Text style = {styles.description}>Prompt 2: </Text>
            </View>
          </TouchableOpacity>
          <Modal isVisible = {isModalVisible}>
            <View style = {styles.profileContainer}>
              <TextInput 
              style = {styles.input} 
              placeholder = "Enter your new name: " 
              onChangeText={setText} 
              selectionColor = 'gold'
              multiline
              value={text}
              ></TextInput>
              <Pressable onPress={nameEditter} >
                <Text style = {styles.backButton}>Back</Text>
              </Pressable>
            </View>
          </Modal>
          <Modal isVisible = {isModalVisible2}>
            <View style = {styles.profileContainer}>
              <TextInput 
              style = {styles.input} 
              placeholder = "Enter your new age: " 
              onChangeText={setText} 
              selectionColor = 'gold'
              multiline
              value={text}
              ></TextInput>
              <Pressable onPress={ageEditter} >
                <Text style = {styles.backButton}>Back</Text>
              </Pressable>
            </View>
          </Modal>
          <Modal isVisible = {isModalVisible3}>
            <View style = {styles.profileContainer}>
              <TextInput 
              style = {styles.input} 
              placeholder = "Enter your new location: " 
              onChangeText={setText} 
              selectionColor = 'gold'
              multiline
              value={text}
              ></TextInput>
              <Pressable onPress={locationEditter} >
                <Text style = {styles.backButton}>Back</Text>
              </Pressable>
            </View>
          </Modal>
          <Modal isVisible = {isModalVisible4}>
            <View style = {styles.profileContainer}>
              <TextInput 
              style = {styles.input} 
              placeholder = "Enter your new school: " 
              onChangeText={setText} 
              selectionColor = 'gold'
              multiline
              value={text}
              ></TextInput>
              <Pressable onPress={schoolEditter} >
                <Text style = {styles.backButton}>Back</Text>
              </Pressable>
            </View>
          </Modal>
          <Modal isVisible = {isModalVisible5}>
            <View style = {styles.profileContainer}>
              <TextInput 
              style = {styles.input} 
              placeholder = "Enter your new roots: " 
              onChangeText={setText} 
              selectionColor = 'gold'
              multiline
              value={text}
              ></TextInput>
              <Pressable onPress={rootsEditter} >
                <Text style = {styles.backButton}>Back</Text>
              </Pressable>
            </View>
          </Modal>
          <Modal isVisible = {isModalVisible6}>
            <View style = {styles.profileContainer}>
              <TextInput 
              style = {styles.input} 
              placeholder = "Enter your new prompt and answer: " 
              onChangeText={setText} 
              selectionColor = 'gold'
              multiline
              value={text}
              ></TextInput>
              <Pressable onPress={prompt1Editter} >
                <Text style = {styles.backButton}>Back</Text>
              </Pressable>
            </View>
          </Modal>
          <Modal isVisible = {isModalVisible7}>
            <View style = {styles.profileContainer}>
              <TextInput 
              style = {styles.input} 
              placeholder = "Enter your new prompt and answer: " 
              onChangeText={setText} 
              selectionColor = 'gold'
              multiline
              value={text}
              ></TextInput>
              <Pressable onPress={prompt2Editter} >
                <Text style = {styles.backButton}>Back</Text>
              </Pressable>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    gap: 20, 
  },

  square: {
    width: 160,
    height: 160,
    backgroundColor: 'gray',
    borderRadius: 15,
  },

  row: {
    flexDirection: 'row',
    gap: 20,
  },

  scrollContainer: {
    flex: 1,
    backgroundColor: 'rgb(227, 123, 116)',
  }, 

  promptContainer: {
    backgroundColor: 'rgb(191, 80, 80)', 
    borderRadius: 15, 
    padding: 10, 
    marginTop: 20,
    marginHorizontal: 20,
  },

  promptContainer2: {
    marginBottom: 20,
  },

  description: {
    color: 'gold',
    fontSize: 20,
  }, 

  profileContainer: {
    alignItems: 'center',
    gap: 20,
  },

  input: {
    borderColor: 'gold',
    borderWidth: 1,
    backgroundColor: 'red',
    borderRadius: 15,
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    color: 'gold',
    fontSize: 20,
    paddingTop: 10,
  },

  backButton: {
    color: 'red',
    fontSize: 40,
  },
});