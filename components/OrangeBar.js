import React from 'react'

import { ProgressBarAndroid, StyleSheet, View,Platform } from 'react-native';


import { ProgressView } from '@react-native-community/progress-view'
import styled from 'styled-components/native'


const Bar = styled.View`
    padding: 10px
    background: white
`

/**
 *La función platform va a evaluar qué plataforma estamos usando (ios o Android)
 * de acuerdo a eso vamos a aplicar una progressbar diferente
 */
const OrangeBar = ()=>{
    return(Platform.OS=== 'ios'? 
        <Bar>
        <ProgressView styleAttr="Horizontal" indeterminate={false} progress={0.5} color="#FF7F00" />
        </Bar>:
        <Bar>
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.40} color="#FF7F00"/>
        </Bar>
    )
}

export default OrangeBar;