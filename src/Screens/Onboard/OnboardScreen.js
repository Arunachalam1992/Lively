//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Animated, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Media } from '../../Global/Media';
import Color from '../../Global/Color';
import { Manrope } from '../../Global/FontFamily';
import { useNavigation } from '@react-navigation/native';

// create a component
const OnboardScreen = () => {

    const navigation = useNavigation();
    const [netInfo_State, setNetinfo] = useState(true);

    const [onboardData, setSteelData] = useState([
        {
            onboard_id: 1,
            onboard_name: 'Partake in',
            onboard_subname: 'Meditation',
            onboard_image: require('../../assets/Gallery/flower_1.png'),
        },
        {
            onboard_id: 2,
            onboard_name: 'Partake in',
            onboard_subname: 'Habits',
            onboard_image: require('../../assets/Gallery/flower_3.png'),
        },
        {
            onboard_id: 3,
            onboard_name: 'Partake in',
            onboard_subname: 'Meditation',
            onboard_image: require('../../assets/Gallery/flower_3.png'),
        },
        {
            onboard_id: 4,
            onboard_name: 'Partake in',
            onboard_subname: 'Habits',
            onboard_image: require('../../assets/Gallery/flower_1.png'),
        },
        {
            onboard_id: 5,
            onboard_name: 'Partake in',
            onboard_subname: 'Meditation',
            onboard_image: require('../../assets/Gallery/flower_1.png'),
        },
        {
            onboard_id: 6,
            onboard_name: 'Partake in',
            onboard_subname: 'Habits',
            onboard_image: require('../../assets/Gallery/flower_3.png'),
        },
    ]);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Image source={{ uri: Media.onboard_main }} style={styles.image} />
                </View>
                <View style={{ flex: 1, width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, color: Color.black, fontFamily: Manrope.Bold, letterSpacing: 0.5 }}>Welcome To The World Of</Text>
                    <Text style={{ textAlign: 'center', fontSize: 22, paddingVertical: 5, color: Color.primary, fontFamily: Manrope.SemiBold, letterSpacing: 0.5 }}>Mindful Living</Text>
                    <Text style={{ textAlign: 'center', lineHeight: 20, fontSize: 14, color: Color.lightBlack, fontFamily: Manrope.Light, letterSpacing: 0.5 }}>Lively brings the art of conscious living from offline to online with the sole purpose of helping YOU live to the fullest</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        {onboardData.map((item, index) => {
                            return (
                                <View key={item + index} style={{ width: 170, height: 230, margin: 5, marginHorizontal: 10, borderWidth: 1, borderColor: '#DA4984', borderRadius: 10 }}>
                                    <View style={{ flex: 2, backgroundColor: '#FFE5EE', borderTopStartRadius: 10, borderTopRightRadius: 10 }}>
                                        <Image
                                            source={item.onboard_image}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                resizeMode: 'contain',
                                            }}
                                        />
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 14, color: Color.lightBlack, fontFamily: Manrope.Medium, letterSpacing: 0.5 }}>{item.onboard_name}</Text>
                                        <Text style={{ fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5 }}>{item.onboard_subname}</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>

                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Auth")} activeOpacity={0.5} style={{ width: '90%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: Color.primary, borderRadius: 30 }}>
                        <Text style={{ fontSize: 14, color: Color.white }}>Get Started</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: 'cover', borderRadius: 100
    },
});

//make this component available to the app
export default OnboardScreen;
