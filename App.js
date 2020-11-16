import React from 'react'
import { StatusBar, ScrollView } from 'react-native'

import styled from 'styled-components/native'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Header from './components/Header'
import OrangeBar from './components/OrangeBar'
import  TopNav  from './components/Navigation'

import DinoAboutUs from './src/screens/DinoAboutUs'
import DinoContextWord from './src/screens/DinoContextWord'
import DinoSearchWord from './src/screens/DinoSearchWord'

const Container = styled.SafeAreaView`
  flex: 1;
`
const Stack = createStackNavigator();


const App= ()=>{
        return( 
        <>
        <Container>
        <StatusBar backgroundColor = "#ffffff"
        barStyle = "dark-content" />
        <Header/>
        <OrangeBar/>        
        <NavigationContainer>
          <Stack.Navigator initialRouteName="DinoSearchWord" headerMode="none">
            <Stack.Screen name="DinoSearchWord" component={DinoSearchWord}/>
            <Stack.Screen name="DinoContextWord" component={DinoContextWord}/>
            <Stack.Screen name="DinoAboutUs" component={DinoAboutUs}/>
            </Stack.Navigator>
        </NavigationContainer>
        </Container>
        </>
    );
  };

  export default App; 

  