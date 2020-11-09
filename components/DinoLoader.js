import React from 'react';

import styled from 'styled-components'

import { AppLoading } from 'expo'

import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_600SemiBold} from '@expo-google-fonts/quicksand'

const Gif = styled.Image`
    height: 200px;
`

const Box = styled.View`
    flex: 1;
    background: white;
    justify-content: center
`
const IntoBox = styled.View`
    margin-left: 25px;
`
const Text = styled.Text`
    font-family: "Quicksand_300Light"
    font-size: 28px;
`
const BoxSecondary = styled.View`
    align-items: center
`

const DinoLoader = () =>{

    let [fontsLoaded, error] = useFonts({
        Quicksand_300Light
      });
    
      if(!fontsLoaded){
        return <AppLoading/>
        }

    return(
        <Box>
            <IntoBox>
            <Gif
            source={require('../assets/loader.gif')}
            />
            </IntoBox>
            <BoxSecondary>
                <Text>Loading...</Text>
            </BoxSecondary>
        </Box>
    )
}

export default DinoLoader;