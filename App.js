import React from 'react'
import { StatusBar } from 'react-native'

import styled from 'styled-components/native'

import { View } from 'react-native'

import Header from './components/Header'
import  TopNav  from './components/Navigation'
import { AppLoading } from 'expo'

import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand'

import { NavigationContainer } from '@react-navigation/native'
import { AboutUs } from './src/screens/DinoAboutUs'
import { ContextWord } from './src/screens/DinoContextWord'
import { SearchWord } from './src/screens/DinoSearchWord'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled.SafeAreaView`
  flex: 1;
  background: green;
`
const Text = styled.Text`
  fontSize: 20px;
`

//fontFamily: "Quicksand_300Light";
/* let [fontsLoaded, error] = useFonts({
        Quicksand_300Light,
    });
    if (!fontsLoaded) {
        return <AppLoading / >
    } */

const App= ()=>{
        return( 
        <>
        <StatusBar backgroundColor = "#ffffff"
        barStyle = "dark-content" />
        <Container>
        <Header> </Header>
        <TopNav></TopNav>
        </Container>
        </>
    );
  };

  export default App; 

  