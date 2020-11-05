import React from 'react'

import styled from 'styled-components/native'

import Header from '../../components/Header'

const Container = styled.SafeAreaView`
  flex:1;
`

const Text = styled.Text`
  font-size: 20px;
`

const SearchWord = ()=>{
  return(
    <Container>
      <Text>Hola 3</Text>
    </Container>
  )
}

export default SearchWord;