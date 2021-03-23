import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

//linear gradient
import { LinearGradient } from 'expo-linear-gradient'

//icon
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Modal({ covid, country }) {
  const [altura] = useState(new Animated.Value(250))

  const [opacity] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.parallel([
      Animated.spring(altura, {
        toValue: 0,
        duration: 5,
        bounciness: 20,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      })
    ]).start()
  }, [])

  return (
    <Animated.View style={[styles.container, {
      opacity: opacity,
      transform: [
        {
          translateY: altura
        }
      ]
    }]}>

      <View style={styles.containerCountyContinent}>

        {/* País */}
        {country !== 'Global' ? <Text style={styles.textCountry}>{covid.All.country}</Text> : <Text style={styles.textCountry}>Global</Text>}


        {country !== 'Global' && <Text style={styles.textContinent}>{covid.All.continent}</Text>}

      </View>

      <View style={styles.data}>
        <View style={styles.iconData}>
          <MaterialIcons name="people-alt" size={50} color="#4B3CF1" />
          <Text style={styles.textData}>{covid.All.confirmed}</Text>
        </View>


        <View style={styles.iconData}>
          <MaterialIcons name="emoji-emotions" size={50} color="yellow" />
          <Text style={styles.textData}>{covid.All.recovered}</Text>
        </View>


        <View style={styles.iconData}>
          <MaterialCommunityIcons name="skull" size={50} color="#262529" />
          <Text style={styles.textData}>{covid.All.deaths}</Text>
        </View>
      </View>

    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around',

    backgroundColor: '#E6DAFB',

    width: '90%',
    height: 250,

    borderRadius: 5
  },

  containerCountyContinent: {
    alignItems: 'center',
  },

  textCountry: {
    fontSize: 40,
    color: '#262529',
    fontWeight: 'bold'
  },

  textContinent: {
    color: '#262529',
    fontSize: 14
  },

  data: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },

  iconData: {
    alignItems: 'center',
  },

  textData: {
    color: '#000000',
    fontSize: 18,
    marginTop: 8
  }
})