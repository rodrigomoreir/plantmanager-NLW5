import React, { useState } from 'react';
import {
  Alert,
  Platform,
  TouchableOpacity,
  Text,
  Image,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import { SvgFromUri } from 'react-native-svg'
import { getStyles } from './PlantSave.style'
import waterdrop from '../assets/waterdrop.png'
import { Button } from '../components/Button';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { format, isBefore } from 'date-fns';
import { PlantProps, savePlant } from '../libs/storage';

interface Params {
  plant: PlantProps
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')
  const navigation = useNavigation()

  const styles = getStyles();
  const route = useRoute()
  const { plant } = route.params as Params

  const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
    if(Platform.OS === 'android'){
      setShowDatePicker(oldState => !oldState)
    }
    if(dateTime && isBefore(dateTime, new Date())){
      setSelectedDateTime(new Date())
      return Alert.alert('Escolha uma hora no futuro! ⏰')
    }
    if(dateTime){
      setSelectedDateTime(dateTime)
    }
  }

  const handleOpenDateTimePickerForAndroid = () => {
    setShowDatePicker(oldState => !oldState)
  }

  const handleSave = async () => {
    try{
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      })

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants'
      })
    }catch{
      Alert.alert('Não foi possível salvar. 😢')

    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      //bounces={false}
    >
      <View style={styles.container}>
        <View style={styles.plantInfo}>
          <SvgFromUri uri={plant.photo} height={150} width={150} />
          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.plantAbout}>{plant.about}</Text>
        </View>
        <View style={styles.controller}>
          <View style={styles.tipContainer}>
            <Image source={waterdrop} style={styles.tipImage} />
            <Text style={styles.tipText}>{plant.water_tips}</Text>
          </View>
          <Text style={styles.alertLabel}>Escolha o melhor horário para ser lembrado:</Text>
          {showDatePicker && (
            <DateTimePicker
            value={selectedDateTime}
            mode={'time'}
            display={'spinner'}
            onChange={handleChangeTime}
          />
          )}
          {Platform.OS === 'android' && (
            <TouchableOpacity
              onPress={handleOpenDateTimePickerForAndroid}
              style={styles.dateTimePickerButton}
            >
            <Text style={styles.dateTimePickerText}>{`Mudar ${format(selectedDateTime, 'HH:mm')}`}</Text>
            </TouchableOpacity>
          )}
          <Button title={'Cadastrar planta'} onPress={handleSave} widthButton={Dimensions.get('window').width - 40}/>
        </View>
      </View>
    </ScrollView>
  );
}
