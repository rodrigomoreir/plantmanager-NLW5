import React from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/Button';
import { getStyles } from './Confirmation.style';

export function Confirmation() {
  const styles = getStyles();
  const navigation = useNavigation()

  const handleSubmit = () => {
    navigation.navigate('PlantSelect')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>Agora vamos começar a cuidar das suas plantinhas com muito cuidado.</Text>
        <View style={styles.footer}>
          <Button title={'Começar'} onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
}
