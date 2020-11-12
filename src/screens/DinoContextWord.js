import React from 'react'

import styled from 'styled-components/native'

//import { AudioRecorder, AudioPlayer } from 'react-native-audio-4expo';

import { AppLoading } from 'expo'

import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand'

import DinoLoader from '../../components/DinoLoader'

import { Audio } from 'expo-av'
//import {AudioRecorder, AudioPlayer} from 'react-native-audio-4expo';
//import Sound from 'react-native-audio-exoplayer'
import gifbackend from '../api/gifbackend'
import getEnvVars from '../../enviroment'
import { WebView } from "react-native-webview";
//import SoundPlayer from ' react-native-sound-player ' 

const TextAudio = styled.Text`
display:flex;
margin: 0px 20px;

`
const TextBox = styled.View`
    flex: 2;
    margin: 1px 5px;
    padding:5px 20px;
  
`

const Image = styled.Image`
padding: 5px;
height: 20%;
width: 20%;
`

const Bottom = styled.Button`
    flex:1;
    margin: 15px;
    padding: 5px;
   
`

const Boxaudio = styled.View`
flex-direction:row;
margin: 0px 10px;
padding;10px 15px;
`

const Container = styled.View`
    flex:1;
    background: white;
`

const { apiGifUrl, apiGifKey, apiGifUrlMiddle, apiGifUrlFinal } = getEnvVars();

const DinoContextWord = () => {

  let playAudio;
  let pronunverbs;
  data.results.map((lexical) => (
    lexical.lexicalEntries.map((entry) => (
      entry.entries.map((pronunciation) => (
        pronunciation.pronunciations.map((pronun) =>
          playAudio = pronun.audioFile
        )))))))

  data.results.map((lexical) => (
    lexical.lexicalEntries.map((entry) => (
      entry.entries.map((pronunciation) => (
        pronunciation.pronunciations.map((pronun) =>
          pronunverbs = pronun.dialects[0]
        ))
      ))
    ))
  )







  const Reproducir = async () => {
    let soundObject = new Audio.Sound();
    try {
      console.log(pronunverbs);
      await soundObject.loadAsync({ uri: playAudio })
      await soundObject.playAsync();
    } catch {
      console.log("No se pudo reproducir")
    }
  }




  /* const playbackObject = await Audio.Sound.createAsync(
    { uri: audio },
    { shouldPlay: true }
  );*/


  /*
  const AudioFuncion = async() => {
 // try {
    console.log ("estoy adentro")
   await soundObject.loadAsync({uri:audio});
   await soundObject.playAsync();
   // Your sound is playing!
 //} catch (error) {
   console.log("No entro")
   // An error occurred!
//  }
}


  data.results.map((lexical) => (
    lexical.lexicalEntries.map((entry) => (
      entry.entries.map((pronunciation) => (
        pronunciation.pronunciations.map((pronun) =>
          pronun.dialects.map((verb) => (
            pronunverbs = verb.dialects

          )))))))))

*/

  const Funcion = () => {
    //  console.log(data.results.lexicalEntries.entries.pronunciations.audioFile)
    console.log("Estoy Adentro")
    /*  data.results.map((lexical) => (
    lexical.lexicalEntries.map((entry) => (
        entry.entries.map((pronunciation) => (
        pronunciation.pronunciations.map((pronun)=> 
        audio = pronun.audioFile
        )
        //< key={pronunciation.pronunciations} source={{uri:pronunciation.pronunciations.audioFile}}/>
       
 <Bottom title={"Botón"} onPress={() => playbackObject()}>  </Bottom>
        ))
        ))
      ))*/
  }



  const getGif = async () => {
    console.log("Funcion del gif")
    try {
      const response = await gifbackend.get(apiGifUrl + apiGifKey + apiGifUrlMiddle + search + apiGifUrlFinal + "1");
      setGif(response.data);
      //console.log(response.data);

      //console.log(apiGifUrl+apiGifKey+apiGifUrlMiddle+'search'+apiGifUrlFinal);
    } catch {
      console.log("Error al tratar de conseguir el Gif")
    }
  }


  const PlayAudio = () => {
    return {

    }
  }

  return (
    <Container>
      <Boxaudio>
      <Bottom title={"play"} color={"#000000"}   onPress={() => Reproducir()}>  </Bottom>
      <TextBox>
      <TextAudio>{pronunverbs}</TextAudio>
      </TextBox>
      </Boxaudio>
    </Container>
  )
}

/*   <Image  source={require("../../assets/audioIcon.png") }/>  */

export default DinoContextWord;

const data = {
  "id": "dinosaur",
  "metadata": {
    "operation": "retrieve",
    "provider": "Oxford University Press",
    "schema": "RetrieveEntry"
  },
  "results": [
    {
      "id": "dinosaur",
      "language": "en-gb",
      "lexicalEntries": [
        {
          "derivatives": [
            {
              "id": "dinosaurian",
              "text": "dinosaurian"
            }
          ],
          "entries": [
            {
              "etymologies": [
                "mid 19th century: from modern Latin dinosaurus, from Greek deinos ‘terrible’ + sauros ‘lizard’"
              ],
              "pronunciations": [
                {
                  "audioFile": "https://audio.oxforddictionaries.com/en/mp3/dinosaur_gb_1.mp3",
                  "dialects": [
                    "British English"
                  ],
                  "phoneticNotation": "IPA",
                  "phoneticSpelling": "ˈdʌɪnəsɔː"
                }
              ],
              "senses": [
                {
                  "definitions": [
                    "a fossil reptile of the Mesozoic era, in many species reaching an enormous size."
                  ],
                  "domainClasses": [
                    {
                      "id": "palaeontology",
                      "text": "Palaeontology"
                    }
                  ],
                  "id": "m_en_gbus0277070.006",
                  "notes": [
                    {
                      "text": "The dinosaurs are placed, according to their hip structure, in two distantly related orders (see ornithischian and saurischian). Some of them may have been warm-blooded, and their closest living relatives are the birds. Dinosaurs were all extinct by the end of the Cretaceous period (65 million years ago), a popular theory being that the extinctions were the result of the impact of a large meteorite",
                      "type": "encyclopedicNote"
                    }
                  ],
                  "semanticClasses": [
                    {
                      "id": "dinosaur",
                      "text": "Dinosaur"
                    }
                  ],
                  "shortDefinitions": [
                    "fossil reptile of Mesozoic era"
                  ],
                  "synonyms": [
                    {
                      "language": "en",
                      "text": "fogey"
                    },
                    {
                      "language": "en",
                      "text": "old fogey"
                    },
                    {
                      "language": "en",
                      "text": "conservative"
                    },
                    {
                      "language": "en",
                      "text": "traditionalist"
                    },
                    {
                      "language": "en",
                      "text": "conventionalist"
                    },
                    {
                      "language": "en",
                      "text": "diehard"
                    },
                    {
                      "language": "en",
                      "text": "conformist"
                    },
                    {
                      "language": "en",
                      "text": "bourgeois"
                    },
                    {
                      "language": "en",
                      "text": "museum piece"
                    },
                    {
                      "language": "en",
                      "text": "fossil"
                    },
                    {
                      "language": "en",
                      "text": "dinosaur"
                    },
                    {
                      "language": "en",
                      "text": "troglodyte"
                    }
                  ],
                  "thesaurusLinks": [
                    {
                      "entry_id": "square",
                      "sense_id": "t_en_gb0013996.002"
                    }
                  ]
                },
                {
                  "definitions": [
                    "a person or thing that is outdated or has become obsolete because of failure to adapt to changing circumstances."
                  ],
                  "id": "m_en_gbus0277070.012",
                  "semanticClasses": [
                    {
                      "id": "outmoded_thing",
                      "text": "Outmoded_Thing"
                    }
                  ],
                  "shortDefinitions": [
                    "person or thing that is outdated"
                  ]
                }
              ]
            }
          ],
          "language": "en-gb",
          "lexicalCategory": {
            "id": "noun",
            "text": "Noun"
          },
          "text": "dinosaur"
        }
      ],
      "type": "headword",
      "word": "dinosaur"
    }
  ],
  "word": "dinosaur"
}
