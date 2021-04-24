import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import { getStyles } from './UserIdentification.style';
import AsyncStorage from '@react-native-async-storage/async-storage'

export function UserIdentification() {
  const styles = getStyles();
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState('')
  const navigation = useNavigation()

  const handleSubmit = async () => {
    if(!name)
      return Alert.alert('Me diz como chamar você 😢')

    try{
      // @plantmanager:user -> Bom padrão de se utilizar para dizer o que ta salvando '@nomedoprojeto:oquesalvou'
      await AsyncStorage.setItem('@plantmanager:user', name)
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect'
      })
    }catch{
      Alert.alert('Não foi possível salvar o seu nome 😢')
    }
  }

  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputChange = (value: string) => {
    setIsFilled(!!value)
    setName(value)
  }

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.content}>
              <View style={styles.form}>
                <View style={styles.header}>
                  <Text style={styles.emoji}>{isFilled ? '😄' : '😀' }</Text>
                  <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
                </View>
                <TextInput
                  style={[styles.input, (isFocused || isFilled) && {borderColor: colors.green}]}
                  placeholder={'Digite um nome'}
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  onChangeText={handleInputChange}
                />
                <View style={styles.footer}>
                  <Button onPress={handleSubmit}>
                    <Text style={styles.textButton}>Começar</Text>
                  </Button>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
