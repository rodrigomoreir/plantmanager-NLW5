import React from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Button } from '../components/Button';
import { getStyles } from './Confirmation.style';

interface Params {
  title: string
  subtitle: string
  buttonTitle: string
  icon: 'smile' | 'hug'
  nextScreen: string
}

const emojis = {
  hug: '🤗',
  smile: '😄'
}

export function Confirmation() {
  const styles = getStyles();
  const navigation = useNavigation()
  const routes = useRoute()

  const { title, subtitle, buttonTitle, icon, nextScreen } = routes.params as Params

  const handleSubmit = () => {
    navigation.navigate(nextScreen)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
}
