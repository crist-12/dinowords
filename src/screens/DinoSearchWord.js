import React from 'react'

import styled from 'styled-components/native'

import Header from '../../components/Header'

import { AppLoading } from 'expo'

import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand'
import { TextInput } from 'react-native-paper'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const Container = styled.SafeAreaView`
    flex:1;
    background: white;
`

const Box = styled.View`
    margin: 0 15px;
`

const Controls = styled.View`
    flex-direction:row;
    height: 50px;
    margin: 0px 15px;
`

const SearchBox = styled.View`
    flex: 2;
    padding:5px;
`

const ButtonBox = styled.View`
    flex: 1;
    margin: 6px;
`
const TextBox = styled.View`
    background: white;
`

const Text = styled.Text`
    font-size: 16px;
    margin: 10px;
    font-family: "Quicksand_700Bold";
`

const InputText = styled.TextInput`
    color: black;
    font-family: "Quicksand_300Light";
    margin: 5px;
    borderWidth: 1px;
    border-radius: 30px;
    padding: 8px;
`

const Button = styled.Button`
    color: white;
    margin: 15px;
    padding: 5px;
`

const SearchWord = ()=>{
  let [fontsLoaded, error] = useFonts({
    Quicksand_700Bold,
    Quicksand_300Light,
    Quicksand_500Medium
  });

  if(!fontsLoaded){
    return <AppLoading/>
    }

  return(
    <Container>
      <Box>
      <Text>Type the word you are looking for:</Text>
      </Box>
      <Controls>
        <SearchBox>
        <InputText placeholder="Buscar"></InputText>
        </SearchBox>
        <ButtonBox><Button title={"Search"} color={"#FF7F00"}></Button></ButtonBox>
      </Controls>
      <TextBox></TextBox>
     
    </Container>
  )
}

export default SearchWord;