import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import signal from './assets/batLogo.png';
import bgVideo from './assets/animatedBg.mp4';
import { useState } from 'react';

export default function App() {

  const [pressed, setPressed] = useState(false)

  function handlePressedBtn() {
    setPressed(!pressed)
  }

  return (
    <View style={styles.container}>
      <Video
        source={bgVideo}
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay
        isMuted
      />
      <View style={[styles.containerTop, {display: pressed? 'none' : 'flex'}]}>
        <Image
          source={signal}
          style={styles.imageLogo}
        />
      </View>

      <TouchableOpacity
        onPress={handlePressedBtn}>
        <Text style={[styles.btnText, {display: pressed? 'none' : 'flex'}]}>
          Ativar Bat-Sinal
        </Text>
      </TouchableOpacity>

      <View style={[styles.formContainer, { display: pressed ? 'flex' : 'none' }]}>
        <Text style={styles.formFont}>Contato: </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder='Nome Completo'
          placeholderTextColor={'#c0c0c0ff'}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder='Localização atual'
          placeholderTextColor={'#c0c0c0ff'}
        />
        <Text style={styles.formFont}>Mais informações</Text>
        <TextInput
          style={[styles.inputStyle, {height: 200}]}
          placeholder='Observações gerais...'
          placeholderTextColor={'#c0c0c0ff'}
        />
        <TouchableOpacity
          style={styles.btnSend}
          onPress={handlePressedBtn}>
          <Image
            source={signal}
            style={styles.smallLogo}
          />
          <Text
            style={styles.sendFont}
          >Enviar!</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  containerTop: {
    flex: 0.5
  },
  imageLogo: {
    height: 180,
    width: 240
  },
  smallLogo: {
    height: 40,
    width: 80
  },
  btnText: {
    color: 'black',
    backgroundColor: '#ffffffd2',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 18,
    borderRadius: 18
  },
  formContainer: {
    width: '90%',
    backgroundColor: '#000000d3',
    padding: 20,
    borderRadius: 14
  },
  formFont: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 14
  },
  inputStyle: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
    marginVertical: 10
  },
  btnSend: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 12,
    borderColor: 'white',
    borderWidth: 1
  },
  sendFont: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
