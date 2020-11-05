import React from 'react'

import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
  flex:1;
`

const Text = styled.Text`
  font-size: 20px;
`

const ContextWord = ()=>{
  return(
    <Container>
      <Text>Hola 2</Text>
    </Container>
  )
}

export default ContextWord;