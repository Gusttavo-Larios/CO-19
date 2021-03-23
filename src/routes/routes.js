import React from 'react'

//routes
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//pages
import Home from '../pages/Home'
import Search from '../pages/Search'

//icon
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator tabBarOptions={{
      style: {
        height: 65,
        backgroundColor: '#160E26',
        borderTopWidth: 0,
        alignItems: 'center',
        justifyContent: 'center'
      },
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      iconStyle: {
        flex: 0,
        width: 15,
        height: 15
      },
      labelStyle: {
        fontSize: 13,
        marginTop: 7,
      },
      inactiveTintColor: "#2b1b4b",
      activeTintColor: "#E6DAFB",
    }}>

      <Tab.Screen name='Mundo' component={Home} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Fontisto name="world-o" size={size} color={focused ? '#694FE6' : "#2b1b4b"} />
          )
        }
      }} />

      <Tab.Screen name='Pesquisar' component={Search} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <FontAwesome name="search" size={size} color={focused ? '#694FE6' : "#2b1b4b"} />
          )
        }
      }} />

    </Tab.Navigator>
  )
}