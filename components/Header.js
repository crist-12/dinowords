import React from 'react';

import styled from 'styled-components/native'

import { AppLoading } from 'expo'

import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_600SemiBold} from '@expo-google-fonts/quicksand'

const Container = styled.View`
    width: 100%;
    height: 100px;
    background: white;
`

const Head = styled.View`
    flex: 1;
    flex-direction: row;
`

const WordSection = styled.View`
    flex: 2;
`

const AppWord = styled.View`
    flex: 1;
    flex-direction: row;
`

const HeaderText = styled.View`
    flex: 1;
`

const Dino = styled.View`
    flex: 1;
    align-items: center;
`


const Image = styled.Image`
    width: 80px;
    height: 80px;
    margin-top: 10px;
`

const Row = styled.View`
    flex-direction:row;
`

const Text = styled.Text`
    color: #000000;
    font-size: 26px;
    fontFamily: "Quicksand_700Bold";
    margin-left: 30px;
    margin-top: 15px;
`

const HelpText = styled.Text`
    color: #000000;
    font-size: 18px;
    fontFamily: "Quicksand_300Light";
    padding: 0 10px;
    margin-top: 20px;
`



const Header = () => {

    let [fontsLoaded, error] = useFonts({
        Quicksand_700Bold,
        Quicksand_300Light
      });

      if(!fontsLoaded){
        return <AppLoading/>
        }

return(
  <Container>
  <Head>
  <WordSection>
  <AppWord><Text>Dinoword</Text></AppWord>
  <HeaderText>
  <HelpText>How can I dinohelp you?</HelpText>
  </HeaderText>
  </WordSection>
  
  <Dino>
  <Image source = {require('../assets/dinosaurio.png')}/>
  </Dino>
  </Head>
  </Container>
)
};

export default Header