import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import signal from './assets/batLogo.png';
import bgVideo from './assets/animatedBg.mp4';

export default function App() {
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
        <View style={styles.containerTop}>
          <Image
            source={signal}
            style={styles.imageLogo}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.btnText}>
            Ativar Bat-Sinal
          </Text>
        </TouchableOpacity>
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
    height: 120,
    width: 190
  },
  btnText: {
    color: 'white',
    backgroundColor: '#000',
    fontSize: 24,
    padding: 18,
    borderRadius: 18
  }
});
