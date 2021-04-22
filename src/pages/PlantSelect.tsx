import React from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';
import { Button } from '../components/Button';
import { getStyles } from './PlantSelect.style';
import { Header } from '../components/Header'

export function PlantSelect() {
  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
      </View>
    </SafeAreaView>
  );
}
