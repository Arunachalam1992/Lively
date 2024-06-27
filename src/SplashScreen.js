import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useDispatch } from 'react-redux';
import Color from './Global/Color';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const imageScale = new Animated.Value(0.1);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  Animated.timing(imageScale, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  useEffect(() => {
    try {
      const SplashLoad = setTimeout(() => {
        navigation.navigate("OnboardScreen")
      }, 3000);
      return () => clearInterval(SplashLoad);
    } catch (error) {
      console.log('catch in splash_Screen ', error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{
          uri: 'https://shopeasey.s3.ap-south-1.amazonaws.com/mobile/assets/logos/main.png',
        }}
        style={[styles.image, { transform: [{ scale: imageScale }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
