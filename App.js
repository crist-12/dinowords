import React from 'react'
import { StatusBar } from 'react-native'

import styled from 'styled-components/native'

import Header from './components/Header'
import { AppLoading } from 'expo'

import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_500Medium} from '@expo-google-fonts/quicksand'


const Container = styled.SafeAreaView`
  flex: 1;
  background: orange;
`
const Text = styled.Text`
  fontSize: 20px;
  fontFamily: "Quicksand_300Light";
`

const App = () => {
  let [fontsLoaded, error] = useFonts({
    Quicksand_300Light,
  });
  
  if(!fontsLoaded){
  return <AppLoading/>
  }
return(
  <>
  <StatusBar 
  backgroundColor="#ffffff"
  barStyle="dark-content"
  />
  <Container>
  <Header></Header>
  
  </Container>
  </>
)
}

export default App

