import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import Color from './Global/Color';

const Splash = ({navigation}) => {
  useEffect(() => {
    try {
      const SplashLoad = setTimeout(() => {
        navigation.navigate("TabNavigator")
      }, 3000);
      return () => clearInterval(SplashLoad);
    } catch (error) {
      console.log('catch in splash_Screen ', error);
    }
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: Color}}>
      <Text style={{fontSize: 18, color: Color.black}}>Splash</Text>
    </View>
  );
};

export default Splash;
