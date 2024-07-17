import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from '../../Global/Color';

const CustomDrawerContent = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.white}}>
      <View
        // onPress={() => {
        //   props.navigation.navigate('ProfileTab');
        // }}
        style={{
          backgroundColor: Color.primary,
          height: 250,
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: 20,
        }}>
        {/* <Image
          source={Media.main_logo}
          style={{
            width: 80,
            height: 80,
            resizeMode: 'contain',
            borderRadius: 100,
            marginTop: 30,
            marginHorizontal: 10,
          }}
        /> */}
        <View style={{flex: 1, marginHorizontal: 10, paddingVertical: 10}}>
          <Text
            style={{
              fontSize: 18,
              color: Color.white,
              letterSpacing: 0.5,
              textTransform: 'capitalize',
            }}
            numberOfLines={1}>
            Demo
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Color.white,
              letterSpacing: 0.5,
              marginVertical: 5,
            }}>
            +91 9876543210
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});

export default CustomDrawerContent;
