import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Playball: require('./assets/fonts/Playball-Regular.ttf'),
  });

  const [value, onChangeText] = React.useState('Useless Placeholder');

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.layout}>
      <LinearGradient
        colors={['rgba(42, 107, 255, 1)', 'rgba(67, 65, 255, 1)']}
        style={styles.background}
      />
      <Image style={styles.backImage}
        source={require('./assets/backgrounds/background-login.png')} />
      <View style={styles.content}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Text style={styles.brand}>AnclaFit</Text>
        <TextInput
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  backImage: {
    width: '100%',
    height: '100%',
    opacity: 0.1,
  },
  brand: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Playball',
  },
  logo: {
    width: 150,
    height: 150,
  },
});
