import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Animated, TouchableOpacity, Keyboard } from 'react-native'

//linear gradient
import { LinearGradient } from 'expo-linear-gradient'

//component
import Modal from '../../components/Modal'
import Details from '../../components/Details'

//icon 
import { FontAwesome } from '@expo/vector-icons';

//api
import api from '../../services/api'

export default function Search() {
  const [country, setCountry] = useState("")
  const [data, setData] = useState(null)

  async function requestCountry() {
    const response = await api.get(`/cases?country=${country}`)

    setCountry('')
    setData(response.data)
    Keyboard.dismiss()
  }

  if (data) {
    return (
      <LinearGradient style={styles.container} colors={['#160E26', '#694FE6']}>

        <View style={styles.searchBox}>
          <TextInput placeholder="Ex: France" style={styles.input} onChangeText={(value) => setCountry(value)} />

          <TouchableOpacity onPress={requestCountry} style={styles.search}>
            <FontAwesome name="search" size={24} color='#fff' />
          </TouchableOpacity>
        </View>

        <Modal covid={data} />
        <Details prop="Capital" value={data.All.capital_city} />
        <Details prop="Expectativa de vida" value={data.All.life_expectancy} />
        <Details prop="População" value={data.All.population} />

        <View style={{ height: 20, width: '90%' }}></View>
      </LinearGradient>
    )
  }

  return (
    <LinearGradient style={styles.container} colors={['#160E26', '#694FE6']}>

      <Animated.View style={styles.searchBox}>
        <TextInput placeholder="Ex: France" style={styles.input} value={country} onChangeText={(valor) => setCountry(valor)} />

        <TouchableOpacity style={styles.search} onPress={requestCountry}>
          <FontAwesome name="search" size={24} color='#fff' />
        </TouchableOpacity>

      </Animated.View>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  searchBox: {
    marginTop: 20,
    width: "90%",

    borderRadius: 5,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center'
  },

  input: {
    backgroundColor: '#E6DAFB',
    height: '100%',
    width: '80%',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    paddingLeft: 15,

    color: '#292929',
    fontSize: 18
  },

  search: {
    width: '20%',
    height: '100%',
    backgroundColor: '#4B3CF1',

    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },

  map: {
    width: '95%',
    height: '95%'
  },
})