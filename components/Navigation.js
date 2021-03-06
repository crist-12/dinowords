import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import DinoAboutUs from '../src/screens/DinoAboutUs'
import DinoContextWord from '../src/screens/DinoContextWord'
import DinoSearchWord from '../src/screens/DinoSearchWord'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  { getData } from '../data_store'

const Tab = createMaterialBottomTabNavigator();

const TopNav =() => {
  let dataObject = getData()
  return  (
    <NavigationContainer >
    <Tab.Navigator
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
        name="Context"
        component={DinoContextWord}
        options={{
          tabBarLabel: 'Context & Meaning',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-multiple" color={color} size={26} />
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
      </Tab.Navigator>
      </NavigationContainer>
  )
}

export default TopNav;






