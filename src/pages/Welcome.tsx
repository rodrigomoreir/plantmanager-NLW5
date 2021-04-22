import React from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/Button';
import wateringImg from '../assets/watering.png';
import { getStyles } from './Welcome.style';
import { Feather } from '@expo/vector-icons'

export function Welcome() {
  const styles = getStyles();
  const navigation = useNavigation()

  const handleStart = () => {
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>
        <Image source={wateringImg} style={styles.image} resizeMode={'contain'} />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>
        <Button widthButton={56} onPress={handleStart}>
          <Feather name={'chevron-right'} style={styles.buttonIcon} />
        </Button>
      </View>
    </SafeAreaView>
  );
}
