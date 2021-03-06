import React from 'react'

import styled from 'styled-components/native'

import { AppLoading } from 'expo'

import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled.SafeAreaView`
  flex:1;
  background: white;
`

const TextArea = styled.SafeAreaView`
  text-align: justify;
  margin: 40px 40px;
`

const Text = styled.Text`
  font-size: 16px;
  font-family: "Quicksand_300Light";
`
const RowSection = styled.View`
  width: 100%
  align-items: flex-start;
  margin-left: 15px;
  flex-direction: row;
`
const BackText = styled.Text`
    font-size: 16px;
    font-family: "Quicksand_700Bold"
    margin-left: 5px;
`

const AboutUs = ({navigation})=>{
    let [fontsLoaded, error] = useFonts({
      Quicksand_300Light,

    });
    if (!fontsLoaded) {
        return <AppLoading / >
    } 
        return(
          <Container>
          <RowSection>
            <MaterialCommunityIcons
            name="arrow-left-circle"
            color="#FF7F00"
            size={28}
            onPress={()=>navigation.navigate("DinoSearchWord")}
            />
            <BackText>Back</BackText>
            </RowSection>
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