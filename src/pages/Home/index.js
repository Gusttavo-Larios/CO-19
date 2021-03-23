import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//linear gradient
import { LinearGradient } from 'expo-linear-gradient'

//component
import Modal from '../../components/Modal'

//api
import api from '../../services/api'

export default function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const response = await api.get('/cases?country=Global')
      setData(response.data)
    })();
  }, [])

  setTimeout(() => { setLoading(false) }, 3000)


  return (
    <LinearGradient style={styles.container} colors={['#160E26', '#694FE6']}>
      {loading ? <Text style={{ position: 'relative', top: '50%', fontSize: 20, color: '#fff' }}>Carregando dados...</Text> : <Modal country='Global' covid={data} />}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})