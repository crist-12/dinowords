import React from 'react'

import styled from 'styled-components/native'

import { AppLoading } from 'expo'

import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand'

import  { getData } from '../../data_store'

import { Audio } from 'expo-av'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useIsFocused } from '@react-navigation/native'

import { useState } from 'react'


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
const Button = styled.Button``




const DinoContextWord=(Objectdata)=>{

  console.log(Objectdata)
  let dataObject = getData();
  const[state, setState] = useState(true);



  console.log("Abri context")


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
         // await soundObject.loadAsync({uri:"https://audio.oxforddictionaries.com/en/mp3/dinosaur_gb_1.mp3"})
         await soundObject.loadAsync({uri:urlSound})
          await soundObject.playAsync();
      }catch{
          console.log("No se pudo reproducir")
      }
    }

const isFocused = useIsFocused();


  return((isFocused?
    <Container>
    <Box>
    <WordBox>
      <WordIntoBox>
        <TextDefinition>{dataObject.id}</TextDefinition>
        <Button></Button>
        <GroupText>Definitions</GroupText>
        {
           dataObject.results.map((lexical)=>(
                lexical.lexicalEntries.map((entry)=>(
                  entry.entries.map((sense)=>(
                    sense.senses.map((definition)=>(
                    <TextMeaning key={definition.definitions}>{definition.definitions[0]}</TextMeaning>
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
      </WordIntoBox>
      
    </WordBox>
    </Box>
    </Container>:
        <Container></Container>
  )
    
  )
}

export default DinoContextWord;





/*<TouchableOpacity onPress={() => navigation.navigate("DinoContext", {id: words.id})}> */

const gifdata = {
  "data": [{
    "type": "gif",
    "id": "JPV8lNtI59zaWyL4pf",
    "url": "https://giphy.com/gifs/memecandy-JPV8lNtI59zaWyL4pf",
    "slug": "memecandy-JPV8lNtI59zaWyL4pf",
    "bitly_gif_url": "https://gph.is/g/Ev3yj5o",
    "bitly_url": "https://gph.is/g/Ev3yj5o",
    "embed_url": "https://giphy.com/embed/JPV8lNtI59zaWyL4pf",
    "username": "memecandy",
    "source": "",
    "title": "Search GIF by memecandy",
    "rating": "g",
    "content_url": "",
    "source_tld": "",
    "source_post_url": "",
    "is_sticker": 0,
    "import_datetime": "2020-01-23 19:09:26",
    "trending_datetime": "0000-00-00 00:00:00",
    "images": {
      "original": {
        "height": "331",
        "width": "498",
        "size": "2464453",
        "url": "https://media0.giphy.com/media/JPV8lNtI59zaWyL4pf/giphy.gif?cid=ae7bab5annc7epbm3zn38bk6ltxrck237c2bc3v7yjfpf7ho&rid=giphy.gif",
        "mp4_size": "871626",
        "mp4": "https://media0.giphy.com/media/JPV8lNtI59zaWyL4pf/giphy.mp4?cid=ae7bab5annc7epbm3zn38bk6ltxrck237c2bc3v7yjfpf7ho&rid=giphy.mp4",
        "webp_size": "1130288",
        "webp": "https://media0.giphy.com/media/JPV8lNtI59zaWyL4pf/giphy.webp?cid=ae7bab5annc7epbm3zn38bk6ltxrck237c2bc3v7yjfpf7ho&rid=giphy.webp",
        "frames": "28",
        "hash": "c4b67f3d578f8877b6caecc752499682"
      },
      "downsized": {
        "height": "331",
        "width": "498",
        "size": "1412653",
        "url": "https://media0.giphy.com/media/JPV8lNtI59zaWyL4pf/giphy-downsized.gif?cid=ae7bab5annc7epbm3zn38bk6ltxrck237c2bc3v7yjfpf7ho&rid=giphy-downsized.gif"
      }
    }
  }
  ]
}

/*
{
  words?<TextMeaning>---</TextMeaning>:
      words.results.map((lexical)=>(
            lexical.lexicalEntries.map((entry)=>(
              entry.entries.map((sense)=>(
                sense.senses.map((definition)=>(
                <TextMeaning key={definition.definitions}>{definition.definitions[0]}</TextMeaning>
                ))
              ))
            ))
          ))
}*/


/*{ words?<TextMeaning>---</TextMeaning>:
          words.results.map((lexical)=>(
            lexical.lexicalEntries.map((category)=>(
              category.lexicalCategory.map((typeword)=>(
                <TextMeaning key={typeword.id}>{typeword.text}</TextMeaning>
                ))
            ))
          ))
    } */


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
