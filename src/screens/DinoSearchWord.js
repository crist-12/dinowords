import React, { useState } from 'react'
import {setData, getData} from '../../data_store'

import styled from 'styled-components/native'

import { AppLoading } from 'expo'

import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand'

import DinoLoader from '../../components/DinoLoader'
import DinoContextWord from '../screens/DinoContextWord'


// ---- Data and API Imports ----
import gifbackend from '../api/gifbackend'
import backend from '../api/backend'
import getEnvVars from '../../enviroment'


// PLEASE DON'T TOUCH ANYTHING!

const { apiKey, apiId, apiUrl, apiUrlFinal } = getEnvVars();
const { apiGifUrl, apiGifKey, apiGifUrlMiddle, apiGifUrlFinal} = getEnvVars();


const Container = styled.ScrollView`
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


const Text = styled.Text`
    font-size: 16px;
    margin: 10px;
    font-family: "Quicksand_700Bold"
`

const InputText = styled.TextInput`
    color: black;
    font-family: "Quicksand_300Light"
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
const Touchable = styled.TouchableOpacity`
    flex: 1;
`

const WordBox = styled.View`
    flex-direction: column;
    height: 50%;
    margin: 0px 15px;
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
const GifBox = styled.View`
  border : 1px;
  margin-top: 5px;
  border-radius: 15px;
  height: 30px;
  align-items: center;
  justify-content: center;
  width: 100%
  height: 200px;
`
const Giphy = styled.Image`
  padding: 5px;
  height: 90%;
  width: 90%;
`

const SearchWord = (navigation)=>{

  // ---- Hooks Section -----
  const[words, setWords] = useState(data);
  const [errorState, setError]=useState(null);
  const [search, setSearch]=useState('');
  const [loading, setLoading]=useState(false);
  const [acting, setActing]=useState(false);
  const [gif, setGif]=useState(null);
  let visible=false;
  let gifObject=null;

  // ----- Font Loading -----
  let [fontsLoaded, error] = useFonts({
    Quicksand_700Bold,
    Quicksand_300Light  
  });

  if(!fontsLoaded){
    return <AppLoading/>
    }

// ---- Gif Api Petition ----
const getGif = async()=>{
    console.log("Funcion del gif")
      try {
        const response = await gifbackend.get(apiGifUrl+apiGifKey+apiGifUrlMiddle+search+apiGifUrlFinal+"1");
        setGif(response.data);
        //console.log(response.data);
        
        //console.log(apiGifUrl+apiGifKey+apiGifUrlMiddle+'search'+apiGifUrlFinal);
      }catch{
      console.log("Error al tratar de conseguir el Gif")
    }
  }

  // ---- Word Api Petition ----
const getWords = async()=>{
console.log("Acabo de entrar a la funcion")
  const config = {
      headers :{
        "app_id": apiId,
        "app_key": apiKey
      }
  }
  
  try{
    setActing(true);
    const response = await backend.get(apiUrl+search+apiUrlFinal, config);
    setWords(response.data);
    console.log("Estamos intentando...")
    //console.log(response.data);
    }catch{
      setError(true);
      console.log('Error');
    }
    try{
      getGif();
    }catch{
      console.log("Error")
    }

    setActing(false); // La aplicación ha dejado de buscar una palabra
    setLoading(false); // Oculto la pantalla de carga
    setVisible() //Habilito la visibilidad del componente DinoSearch
    console.log("Estoy en getWords()")
  }

  const setVisible=()=>{
    visible=true;
  }

  if(!words===null){
    setLoading(false);
    console.log("Cambió de estado a falso (no cargando)");
  }

  if(acting){
    return(
      <DinoLoader/>
    )
  }

  setData(words);


  return(
    (!loading?
    <Container>
      <Box>
      <Text>Type the word you are looking for:</Text>
      </Box>
      <Controls>
        <SearchBox>
        <InputText placeholder="Buscar" value={search} onChangeText={setSearch}/>
        </SearchBox>
        <ButtonBox><Button title={"Search"} color={"#FF7F00"} onPress={()=>getWords()}/></ButtonBox>
      </Controls>
      <WordBox>
        <WordIntoBox>
        <Touchable onPress={()=>setData(words)}>
        <TextDefinition>{words.id}</TextDefinition>
        <TextMeaning> Concepts: </TextMeaning>
        {
        visible?<TextMeaning>---</TextMeaning>:
          words.results.map((lexical)=>(
                lexical.lexicalEntries.map((entry)=>(
                  entry.entries.map((sense)=>(
                    sense.senses.map((definition)=>(
                    <TextMeaning key={definition.definitions}>{definition.definitions[0]}</TextMeaning>
                    ))
                  ))
                ))
              ))
        }
        
        <TextMeaning>Category: </TextMeaning>
        { visible?<TextMeaning>---</TextMeaning>:
              words.results.map((lexical)=>(
                lexical.lexicalEntries.map((category)=>(
                  <TextMeaning key={category.lexicalCategory.id}>{category.lexicalCategory.text}</TextMeaning>
                ))
              ))     
        }
        </Touchable>
        </WordIntoBox>
        <GifBox>

      {
        !gif?<Giphy
        source = {require('../../assets/fondogif.png')}
        />:
        
          gif.data.map((image)=>(
            
            <Giphy key = {image.images.downsized.url}
            source={{
            uri: image.images.downsized.url
            }}
            /> 
          ))
      }
      
    </GifBox>
    </WordBox>
   
    </Container>
    :
   <DinoLoader/>
    )
  )
}

export default SearchWord;



const gifdata = {
  "data":[{
  "type":"gif",
  "id":"JPV8lNtI59zaWyL4pf",
  "url":"https://giphy.com/gifs/memecandy-JPV8lNtI59zaWyL4pf",
  "slug":"memecandy-JPV8lNtI59zaWyL4pf",
  "bitly_gif_url":"https://gph.is/g/Ev3yj5o",
  "bitly_url":"https://gph.is/g/Ev3yj5o",
  "embed_url":"https://giphy.com/embed/JPV8lNtI59zaWyL4pf",
  "username":"memecandy",
  "source":"",
  "title":"Search GIF by memecandy",
  "rating":"g",
  "content_url":"",
  "source_tld":"",
  "source_post_url":"",
  "is_sticker":0,
  "import_datetime":"2020-01-23 19:09:26",
  "trending_datetime":"0000-00-00 00:00:00",
  "images":{
      "original":{
          "height":"331",
          "width":"498",
          "size":"2464453",
          "url":"https://media0.giphy.com/media/JPV8lNtI59zaWyL4pf/giphy.gif?cid=ae7bab5annc7epbm3zn38bk6ltxrck237c2bc3v7yjfpf7ho&rid=giphy.gif",
          "mp4_size":"871626",
          "mp4":"https://media0.giphy.com/media/JPV8lNtI59zaWyL4pf/giphy.mp4?cid=ae7bab5annc7epbm3zn38bk6ltxrck237c2bc3v7yjfpf7ho&rid=giphy.mp4",
          "webp_size":"1130288",
          "webp":"https://media0.giphy.com/media/JPV8lNtI59zaWyL4pf/giphy.webp?cid=ae7bab5annc7epbm3zn38bk6ltxrck237c2bc3v7yjfpf7ho&rid=giphy.webp",
          "frames":"28",
          "hash":"c4b67f3d578f8877b6caecc752499682"},
          "downsized":{
              "height":"331",
              "width":"498",
              "size":"1412653",
              "url":"https://media0.giphy.com/media/JPV8lNtI59zaWyL4pf/giphy-downsized.gif?cid=ae7bab5annc7epbm3zn38bk6ltxrck237c2bc3v7yjfpf7ho&rid=giphy-downsized.gif"
          }
      }
  }
]
}


/*{
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
}
*/

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


