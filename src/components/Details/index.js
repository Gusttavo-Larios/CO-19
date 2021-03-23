import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, Animated } from 'react-native'

export default function Deatails({ prop, value }) {
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

      <Text style={styles.textProp}>{prop}: </Text>
      <Text style={styles.textPropValue}>{value}</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,

    backgroundColor: '#E6DAFB',

    width: '90%',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    height: 55,

    borderRadius: 5
  },

  textProp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#262529'
  },

  textPropValue: {
    fontSize: 18,
  }
})