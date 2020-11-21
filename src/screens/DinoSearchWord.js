//DinoSearchWord es la parte de la aplicación que provee el entorno básico para la búsqueda de la palabra

//Importaciones generales y de estilo
import React, { useState } from 'react'
import { AppLoading } from 'expo'
import styled from 'styled-components/native'
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand'

//Datos de arreglo de palabras y gifs enviados para ser procesados
import {setData, singleGif} from '../../data_store'
import  { setGifData, getGifData } from '../../data_store'

//Importaciones de componentes
import DinoLoader from '../../components/DinoLoader'
import DinoContextWord from '../screens/DinoContextWord'


// ---- Data and API Imports ----
import gifbackend from '../api/gifbackend'
import backend from '../api/backend'
import getEnvVars from '../../enviroment'
import gifinstance from '../api/gifbackend'
import { Linking } from 'react-native'


//Variables y llaves de peticiones API
const { apiKey, apiId, apiUrl, apiUrlFinal } = getEnvVars();
const { apiGifUrl, apiGifKey, apiGifUrlMiddle, apiGifUrlFinal} = getEnvVars();

// ---- STYLED SECTION ----
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

const GroupText = styled.Text`
  font-family: "Quicksand_400Regular"
  font-size: 16px;
  text-decoration: underline;
  padding: 5px;
  margin-top: 2px;
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
  margin-bottom: 10px;
`
const Giphy = styled.Image`
  padding: 5px;
  height: 90%;
  width: 90%;
`

const InfoBox = styled.View`
`


const InfoButton = styled.Button`
  margin-top: 5px;
`

const TextLink = styled.Text`
  margin-top: 10px;
  font-family: "Quicksand_400Regular"
  font-size: 16px;
  text-align:justify;
  padding: 5px;
  color: blue;
  text-decoration: underline;
  text-align: center;
`
//Array que contiene los links de los gifs
const gifArray=[];

const SearchWord = ({navigation})=>{
  let validator;
  let aux;
  // ---- Hooks Section -----
  const[words, setWords] = useState(data); //Hook para cargar la información de la palabra
  const [errorState, setError]=useState(null); //Hook que detecta si hay algún error
  const [search, setSearch]=useState(''); //Hook que maneja el almacenamiento de lo que escribo en el textinput
  const [loading, setLoading]=useState(false); //Hook para manejar si mi app está cargando o no
  const [acting, setActing]=useState(false); //Hook para detectar si el gif y la palabra ya se cargaron
  const [gif, setGif]=useState(null); //Hook que almacena resultado de la petición gif
  const [validatorWord, setValidatorWord]=useState(true) 
  let visible=false; //Variable que controla la visibilidad de DinoLoader

  // ----- Font Loading -----
  let [fontsLoaded, error] = useFonts({
    Quicksand_700Bold,
    Quicksand_300Light,
    Quicksand_400Regular  
  });

  if(!fontsLoaded){
    return <AppLoading/>
    }

// ---- Gif Api Petition ----
const getGif = async()=>{
  try{
    const responseGif = await gifbackend.get(apiGifUrl+apiGifKey+apiGifUrlMiddle+search+apiGifUrlFinal+"3");
    setGif(responseGif.data);
    await setGifData(responseGif.data)

  }catch{
    console.log("Ha ocurrido un error al tratar de obtener el gif.")
  }

}

//Función invocada al presionar botón de búsqueda, desencadena dos funciones
const dataFunction = async()=>{
     await getGif() // La función que busca el gif y lo envía a datastore para hacerlo accesible desde toda la app
     await getWords() // La función que obtiene la palabra y también lo envía a datastore
     
     setActing(false); // La aplicación ha dejado de buscar una palabra
     setLoading(false); // Oculto la pantalla de carga
     setVisible()
}

  // ---- Word Api Petition ----
const getWords = async()=>{

  if(!search==""){
  const config = { //Configuración de header de la petición
      headers :{
        "app_id": apiId,
        "app_key": apiKey
      }
  }
  console.log("Estoy en words")

  try{
    setActing(true);
    const response = await backend.get(apiUrl+search+apiUrlFinal, config);
    setWords(response.data);
    setValidatorWord(true)
    }catch{
      setError(true);
      setValidatorWord(false)
      console.log('Error al conseguir data');
    }}else{
      alert("Come on, write a word!")
    }
  }


  const setVisible=()=>{
    visible=true;
  }

  //En caso que hayamos encontrado una palabra, la app deja de cargar automáticamente.
  if(!words===null ){
    setLoading(false);
  }

  //Mientras esté "actuando", la aplicación retorna el componente del DinoLoader
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
        <ButtonBox>
          <Button title={"Search"} color={"#FF7F00"} onPress={()=>dataFunction(search)}/>
        </ButtonBox>
      </Controls>
      <WordBox>
        <WordIntoBox>
          {(
            validatorWord?
          
          <Touchable onPress={()=> navigation.navigate("DinoContextWord", {words})}>
           <TextDefinition>{words.id}</TextDefinition>
              <GroupText>Concepts</GroupText>
                    {
                    visible?<TextMeaning>---</TextMeaning>:
                      words.results.map((lexical)=>(
                            lexical.lexicalEntries.map((entry)=>(
                              entry.entries.map((sense)=>(
                                sense.senses.map((definition)=>(
                                <TextMeaning key={definition.definitions}>{definition.definitions}</TextMeaning>
                                ))
                              ))
                            ))
                          ))
                    }
        
              <GroupText>Category</GroupText>
              { visible?<TextMeaning>---</TextMeaning>:
                    words.results.map((lexical)=>(
                      lexical.lexicalEntries.map((category)=>(
                        <TextMeaning key={category.lexicalCategory.id}>{category.lexicalCategory.text}</TextMeaning>
                      ))
                    ))     
              }
          </Touchable>
          :
          <><TextMeaning>Oh, no, something went wrong. We could not find your word <Text>{search}</Text> but we can help you. If you want to know more information about that word, you can click here.</TextMeaning>
          <TextLink onPress={()=> Linking.openURL("https://www.lexico.com/definition/"+search)}>Dinoclick me</TextLink></> )}
        </WordIntoBox>
            
      <GifBox>
      {
        !gif?<Giphy
        source = {require('../../assets/fondogif.png')}
        />:
            <Giphy 
            source={{
              uri: singleGif()
          }}/>
      }
    </GifBox>
    <InfoBox>
    <InfoButton title={"About us"} color="#FF7F00" onPress={()=>navigation.navigate("DinoAboutUs")}/>
    </InfoBox>
    </WordBox>

    </Container>
    :
   <DinoLoader/>
    )
  )
}

export default SearchWord;


//Por defecto el programa debe cargar la palabra "dinosaur"
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


