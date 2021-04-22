import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import { getStyles } from './UserIdentification.style';

export function UserIdentification() {
  const styles = getStyles();
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState('')
  const navigation = useNavigation()

  const handleSubmit = () => {
    navigation.navigate('Confirmation')
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
