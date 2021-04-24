import React, {useEffect, useState} from 'react'
import { Text, View, Image } from 'react-native'
import { getStyles } from './Header.style'
import userImg from '../assets/foto.png'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function Header() {
  const styles = getStyles()
  const [userName, setUserName] = useState<string>()

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUserName(user || '')
    }

    loadStorageUserName()
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
        <Image source={userImg} style={styles.image}/>
    </View>
  )
}
