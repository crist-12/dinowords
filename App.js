import React from 'react'
import { StatusBar } from 'react-native'

import styled from 'styled-components/native'

import { View } from 'react-native'

import Header from './components/Header'
import OrangeBar from './components/OrangeBar'
import  TopNav  from './components/Navigation'


const Container = styled.SafeAreaView`
  flex: 1;
`
const Text = styled.Text`
  fontSize: 20px;
`

const App= ()=>{
        return( 
        <>
        <StatusBar backgroundColor = "#ffffff"
        barStyle = "dark-content" />
        <Container>
        <Header> </Header>
        <View>
        <OrangeBar></OrangeBar>
        </View>
        <TopNav></TopNav>
        </Container>
        </>
    );
  };

  export default App; 

  