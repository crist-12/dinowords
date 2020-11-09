import React from 'react'
import { StatusBar, ScrollView } from 'react-native'

import styled from 'styled-components/native'

import { View } from 'react-native'

import Header from './components/Header'
import OrangeBar from './components/OrangeBar'
import  TopNav  from './components/Navigation'


const Container = styled.SafeAreaView`
  flex: 1;
`

const App= ()=>{
        return( 
        <>
        <StatusBar backgroundColor = "#ffffff"
        barStyle = "dark-content" />
        <Container>
        <Header/>
        <OrangeBar/>
        <TopNav></TopNav>
        </Container>
        </>
    );
  };

  export default App; 

  