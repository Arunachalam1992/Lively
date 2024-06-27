//import liraries
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Image,
    TouchableOpacity,
    TextInput,
    Keyboard,
    SafeAreaView,
    ToastAndroid,
} from 'react-native';
import Color from '../../Global/Color';
import { Manrope } from '../../Global/FontFamily';
import { useNavigation } from '@react-navigation/native';
import { Media } from '../../Global/Media';

// create a component
const Login = () => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const [number, setNumber] = useState('');
    const [error, setError] = useState(false);
    const [loginType, setLoginType] = useState('');

    const chkNumber = number => {
        setNumber(number);
        if (number.length == 10) {
            Keyboard.dismiss();
        }
    };

    const chkNumberError = number => {
        let reg = /^[6-9][0-9]*$/;

        if (number.length === 0) {
            setError('Please enter your mobile number');
        } else if (reg.test(number) === false) {
            setError(false);
            setError(false);
        } else if (reg.test(number) === true) {
            setError('');
        }
    };

    const loginVerify = async () => {
        try {
            setLoading(true);
            if (number.length == 10) {
                navigation.navigate('OTPScreen', {
                    number,
                    token: '',
                    loginType,
                });
                // var data = {
                //   mobile: number,
                // };
                // const login_data = await fetchData.login_with_otp(data, null);
                // if (login_data?.status == true) {
                //   common_fn.showToast('OTP Sent to your Email');
                //   navigation.navigate('OTPScreen', {
                //     number,
                //     token: login_data?.token,
                //     loginType,
                //   });
                //   setLoading(false);
                // } else {
                //   var msg = login_data?.message;
                //   setError(msg);
                //   setLoading(false);
                // }
                setLoading(false);
            } else {
                ToastAndroid.show("Invalid Phone Number, Please Enter Your 10 Digit Phone Number", ToastAndroid.SHORT);
                setLoading(false);
            }
        } catch (error) {
            console.log('error', error);
            setLoading(false);
        }
    };

    const RegisterVerify = async () => {
        try {
            setLoading(true);
            //   if (number.length == 10) {
            //     var data = {
            //       mobile: number,
            //       region_id: countryCode?.id,
            //     };
            //     const Register_data = await fetchData.Register_request_otp(data, null);
            //     if (Register_data?.status == true) {
            //       common_fn.showToast('OTP Sent to your Email');
            //       navigation.navigate('OTPScreen', {
            //         number,
            //         token: Register_data?.token,
            //         loginType,
            //       });
            //       setLoading(false);
            //     } else {
            //       var msg = Register_data?.message;
            //       setError(msg);
            //       setLoading(false);
            //     }
            //     setLoading(false);
            //   } else {
            //     common_fn.showToast(
            //       'Invalid Phone Number Please Enter Your 10 Digit Phone Number',
            //     );
            //     setLoading(false);
            //   }
        } catch (error) {
            console.log('error', error);
            setLoading(false);
        }
    };



    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: Media.onboard_main }} style={styles.image} />
                <Text>Login</Text>
            </View>
            <View style={{ flex: 1, width: '100%', }}>
                <View
                    style={{
                        //   flex: 1,
                        padding: 10,
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: Color.black,
                            fontFamily: Manrope.Bold,
                            marginTop: 10,
                        }}>
                        Mobile Number
                    </Text>
                    <View style={{ marginVertical: 10 }}>
                        <View style={styles.NumberBoxConatiner}>
                            {/* <Text style={styles.numberCountryCode}>+91</Text> */}
                            <TextInput
                                placeholder="Enter Your Mobile number"
                                placeholderTextColor={Color.cloudyGrey}
                                value={number}
                                keyboardType="phone-pad"
                                maxLength={10}
                                autoFocus={number.length == 10 ? false : true}
                                onChangeText={number => {
                                    chkNumber(number);
                                    chkNumberError(number);
                                }}
                                style={styles.numberTextBox}
                            />
                        </View>
                        {error && <Text style={styles.invalidLogin}>{error}</Text>}
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            loginVerify()
                            // loginType == '' ? loginVerify() : RegisterVerify();
                        }}
                        style={{
                            width: '100%',
                            height: 50,
                            marginVertical: 20,
                            backgroundColor: Color.primary,
                            borderColor: Color.primary,
                            borderWidth: 0.5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: Color.white,
                                fontFamily: Manrope.SemiBold,
                                letterSpacing: 0.5,
                                lineHeight: 22,
                            }}>
                            SUBMIT
                        </Text>
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
        alignItems: 'center',
        backgroundColor: Color.white,
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: 'cover', borderRadius: 100
    },
    NumberBoxConatiner: {
        display: 'flex',
        borderColor: Color.cloudyGrey,
        borderWidth: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    numberCountryCode: {
        color: Color.black,
        marginHorizontal: 10,
        fontSize: 16,
        fontFamily: Manrope.SemiBold,
        textAlign: 'center',
        alignItems: 'center',
        padding: 5,
        paddingTop: 5,
        paddingHorizontal: 5,
    },
    invalidLogin: {
        fontSize: 12,
        fontFamily: Manrope.Light,
        color: Color.red,
        textAlign: 'left',
        marginTop: 10,
    },
    numberTextBox: {
        flex: 1,
        display: 'flex',
        height: 50,
        borderLeftColor: Color.Venus,
        borderLeftWidth: 1,
        color: Color.black,
        fontSize: 14,
        padding: 5,
        paddingTop: 5,
        paddingHorizontal: 10,
        fontFamily: Manrope.SemiBold,
        alignItems: 'flex-start',
    },
});

//make this component available to the app
export default Login;
