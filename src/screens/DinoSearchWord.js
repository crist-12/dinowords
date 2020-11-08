import React, { useState } from 'react'

import styled from 'styled-components/native'

import { AppLoading } from 'expo'

import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand'

import backend from '../api/backend'
import getEnvVars from '../../enviroment'

const { apiKey } = getEnvVars();
const { apiId } = getEnvVars();
const { apiUrl } = getEnvVars();

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


  
}

const SearchWord = ()=>{

  const[words, setWords] = useState(null);
  const [errorState, setError]=useState(null);

  let [fontsLoaded, error] = useFonts({
    Quicksand_700Bold,
    Quicksand_300Light,
    Quicksand_500Medium
  });

  if(!fontsLoaded){
    return <AppLoading/>
    }
    const getWords = async()=>{

      let config = {
          headers :{
            "app_id": apiId,
            "app_key": apiKey
          }
      }
      try{
        const response = await backend.get(apiUrl, config);
    
        setWords(response.data);
        //console.log(response.data);
        console.log(words);
      }catch{
        setError(true);
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
        <ButtonBox><Button title={"Search"} color={"#FF7F00"} onPress={getWords()}></Button></ButtonBox>
      </Controls>
  <TextBox></TextBox>
      <Text></Text>
    </Container>
  )
}

export default SearchWord;