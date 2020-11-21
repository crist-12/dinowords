//Context es el entorno en el que se provee la información extendida acerca de la palabra buscada

// Importaciones generales y de estado
import React from 'react'
import { AppLoading } from 'expo'
import { ScrollView } from 'react-native'
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

// Importaciones de datos de data_store
import  { getData, getGifData } from '../../data_store'

// Librerías adicionales
import { Audio } from 'expo-av'

// ----- STYLED SECTIONS -----

const Container = styled.ScrollView`
    flex:1;
    background: white;
`

const Box = styled.View`
    margin: 0 15px;
`

const WordBox = styled.View`
    flex-direction: column;
    height: 50%;
    margin: 0px 3px;
    padding: 5px;
`

const WordIntoBox = styled.View`
    border: 1px;
    border-radius: 15px;
    padding: 5px;
`

const TextDefinition = styled.Text`
    font-family: "Quicksand_700Bold"
    font-size: 18px;
    text-transform: capitalize;
    padding: 5px;
`
const TextMeaning = styled.Text`
  margin-top: 10px;
  font-family: "Quicksand_300Light"
  font-size: 16px;
  text-align:justify;
  padding: 5px;
`

const GroupText = styled.Text`
  font-family: "Quicksand_400Regular"
  font-size: 16px;
  text-decoration: underline;
  padding: 5px;
  margin-top: 2px;
`

const PlaySection = styled.View`
  padding: 5px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`


const PlayButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background: black;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`

const TextPronunciation = styled.Text`
  font-family: "Quicksand_300Light"
  margin: 10px;
`

const GBox = styled.View`
  padding: 5px;
`

const GifBox = styled.View`
  border : 1px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
const Giphy = styled.Image`
padding: 5px;
width: 200px;
height: 200px;
`

const GifContainer = styled.View`
  flex-direction: row;
  width: 100%
`

const DinoContextWord=({navigation})=>{
  let dataObject = getData(); // Carga los datos de la palabra provenientes de data_store
  let gifArray; // Declaramos un array para guardar los tres gifs
  gifArray = getGifData(); //Seteamos valores con el array proveniente de data_store
  let wordData =['No hay datos disponibles', 'No hay datos disponibles'] // Declaración de array

// Seteo el arreglo con la notación fonética y de spelling.
try{
    {
      dataObject.results.map((lexical) => (
      lexical.lexicalEntries.map((entry) => (
      entry.entries.map((pronunciation) => (
        pronunciation.pronunciations.map((pronun) =>
        {if(pronun.phoneticNotation) wordData[0]=pronun.phoneticNotation;
         if(pronun.phoneticSpelling) wordData[1]=pronun.phoneticSpelling;
        }
        ))))))
    )
    }
  }catch{ // Algunas palabras no tienen estos detalles, por ende solo lo ignoramos
    wordData[0]= "---"
    wordData[1]= "---"
  }

// Hook para uso de font-family
    let [fontsLoaded, error] = useFonts({
      Quicksand_300Light,
      Quicksand_400Regular
    });
    if (!fontsLoaded) {
        return <AppLoading / >
    } 

    const audioPlay = async()=>{
      let soundObject = new Audio.Sound();
      let urlSound=null;

        dataObject.results.map((lexical) => (
        lexical.lexicalEntries.map((entry) => (
        entry.entries.map((pronunciation) => (
          pronunciation.pronunciations.map((pronun) =>
            urlSound = pronun.audioFile
          ))))))
      )

      try{
         await soundObject.loadAsync({uri:urlSound})
          await soundObject.playAsync();
      }catch{
          console.log("No se pudo reproducir")
      }
    }


  return(
    <Container>
    <Box>
    <WordBox>
      <WordIntoBox>
        <TextDefinition>{dataObject.id}</TextDefinition>

        <GroupText>Definitions</GroupText> 
        {
           dataObject.results.map((lexical)=>(
                lexical.lexicalEntries.map((entry)=>(
                  entry.entries.map((sense)=>(
                    sense.senses.map((definition)=>(
                    <TextMeaning key={definition.definitions}>{definition.definitions}</TextMeaning>
                    ))
                  ))
                ))
              ))
         }  
    
        <GroupText>Lexical Group</GroupText>
        {
          dataObject.results.map((lexical)=>(
                lexical.lexicalEntries.map((category)=>(
                  <TextMeaning key={category.lexicalCategory.id}>{category.lexicalCategory.text}</TextMeaning>
                ))
              ))
        }
        <GroupText>Pronunciation</GroupText>
        <PlaySection>
        <PlayButton onPress={()=>audioPlay()}>
          <MaterialCommunityIcons
          size= {18}
          color="white"
          name = "volume-high"/>
        </PlayButton>
          <TextPronunciation>British Pronunciation</TextPronunciation>
        </PlaySection>
        <GroupText>Notation</GroupText>
      <TextMeaning>{wordData[0]}</TextMeaning>
        <GroupText>Spelling Notation</GroupText>
      <TextMeaning>{wordData[1]}</TextMeaning>
      </WordIntoBox>
      <GBox>
        <GifContainer>
      <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}>
                  
                        {
                          !gifArray?
                          <>
                          <Giphy
                          source = {require('../../assets/fondogif.png')}
                          />
                          </>:
                          <>
                          <GifBox>
                            <Giphy
                            source={{
                              uri: gifArray[0]
                            }}/>
                            </GifBox>
                            <GifBox>
                            <Giphy
                            source={{
                              uri: gifArray[1]
                            }}/>
                            </GifBox>
                            <GifBox>
                            <Giphy
                            source={{
                              uri: gifArray[2]
                            }}/>
                            </GifBox>
                            </>  
                  }
                  
        </ScrollView>
        </GifContainer>
      </GBox>
    </WordBox>

    </Box>
   
    </Container>
  
    
  )
}

export default DinoContextWord;
