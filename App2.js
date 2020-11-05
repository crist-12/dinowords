import React from 'react'
//import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import DinoAboutUs from './src/screens/DinoAboutUs'
import DinoContextWord from './src/screens/DinoContextWord'
import DinoSearchWord from './src/screens/DinoSearchWord'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
/* Instala esta dependencia para que te funcione
  npm install @react-navigation/material-bottom-tabs react-native-paper
 */


/*import styled from 'styled-components/native'

import Header from './components/Header'
/import { AppLoading } from 'expo'
e91e63
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand'
*/
const Tab = createMaterialBottomTabNavigator();

const MyTabs = ()=>{
  return  (
    <Tab.Navigator initialRouteName="Search"
    activeColor="#FF7F00"
    labelStyle={{ fontSize: 12 }}
    barStyle={{ backgroundColor: '#ffffff' }}>
         <Tab.Screen
        name="Search"
        component={DinoSearchWord}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AboutUs"
        component={DinoAboutUs}
        options={{
          tabBarLabel: 'AboutUs',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-question" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Context"
        component={DinoContextWord}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="table-settings" color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>
  )
}



export default function App() {
  return (
<NavigationContainer>
      <MyTabs />
    </NavigationContainer>

  )
}


//


const App = () => {
  let [fontsLoaded, error] = useFonts({
      Quicksand_300Light,
  });
  if (!fontsLoaded) {
      return <AppLoading / >
  };

  return( 
      <>
      <StatusBar backgroundColor = "#ffffff"
      barStyle = "dark-content" />
      <Container>
      <Header> </Header>
      <Navigation></Navigation>
      </Container>
      </>
  )
}

export default App; 




/*


const Container = styled.SafeAreaView`
  flex: 1;
  background: orange;
`
const Text = styled.Text`
  fontSize: 20px;
  fontFamily: "Quicksand_300Light";
`

const App = () => {
  let [fontsLoaded, error] = useFonts({
    Quicksand_300Light,
  });
  
  if(!fontsLoaded){
  return <AppLoading/>
  }
return(
  <>
  <StatusBar 
  backgroundColor="#ffffff"
  barStyle="dark-content"
  />
  <Container>
  <Header></Header>
  
  </Container>
  </>
)
}
*/
