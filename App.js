import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavo from './navigation/bottomtab';
export default function App() {
  return (
   <NavigationContainer>
    <BottomTabNavo/>
   </NavigationContainer> 
  );
}

