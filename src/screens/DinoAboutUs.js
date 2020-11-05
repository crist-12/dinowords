import React from 'react'

import styled from 'styled-components/native'

import { AppLoading } from 'expo'

import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand'


const Container = styled.SafeAreaView`
  flex:1;
`

const TextArea = styled.SafeAreaView`
  text-align: justify;
  margin: 40px 40px;
`

const Text = styled.Text`
  font-size: 16px;
  font-family: "Quicksand_300Light";
`



const AboutUs = ()=>{
    let [fontsLoaded, error] = useFonts({
      Quicksand_300Light,
    });
    if (!fontsLoaded) {
        return <AppLoading / >
    } 
        return(
          <Container>
            <TextArea>
            <Text>
            {`Created by Christopher Ortiz and Ángel Gonzáles for Programming Mobile I.

Universidad Católica de Honduras
Tegucigalpa, Honduras
November, 2020

Using OXFORD Dictionary API and GIPHY API.abs

Icons made by Pixel Perfect from www.flaticon.com
              `
            }
            </Text>
            </TextArea>
          </Container>
        )
}

export default AboutUs;