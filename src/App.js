import React, { useEffect } from 'react';
import { Linking, LogBox, StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider, useDispatch } from 'react-redux';

import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigationRef } from '../RootNavigation';
import Store from './Redux/Store';
import Color from './Global/Color';
import SplashScreen from './SplashScreen';
import OnboardScreen from './Screens/Onboard/OnboardScreen';
import TabNavigator, { Auth } from './route';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

LogBox.ignoreAllLogs;

const MyDrawer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleDeepLink = ({ url }) => {
      try {
        const route = url.replace(/.*?:\/\//g, '');
        const id = route.match(/\/([^\/]+)\/?$/)[1];
      } catch (error) {
        console.error('Error handling deep link:', error);
      }
    };

    const subscription = Linking.addEventListener('url', handleDeepLink);

    const handleInitialUrl = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();
        if (initialUrl) {
          handleDeepLink({ url: initialUrl });
        }
      } catch (error) {
        console.error('Error handling initial URL:', error);
      }
    };

    handleInitialUrl();

    return () => {
      subscription.remove();
    };
  }, []);
  return (
    <PaperProvider>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{ swipeEnabled: false }}
        // drawerContent={props => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name="Home"
            component={MainApp}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const App = () => {

  return (
    <Provider store={Store}>
      <MyDrawer />
    </Provider>
  );
};

const MainApp = () => {
  return (
    <>
      <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardScreen"
          component={OnboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen
          name="TermsandConditions"
          component={TermsandConditions}
          options={({navigation, route}) => ({
            headerTitle: 'Terms & Conditions',
            headerTitleAlign: 'center',
            headerTitleStyle: {color: Color.white},
            headerStyle: {backgroundColor: Color.primary},
            headerLeft: () => (
              <View style={{marginHorizontal: 10}}>
                <Icon
                  name="arrow-back"
                  size={30}
                  color={Color.white}
                  onPress={() => navigation.goBack()}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={({navigation, route}) => ({
            headerTitle: 'Privacy Policy',
            headerTitleStyle: {color: Color.white},
            headerStyle: {backgroundColor: Color.primary},
            headerLeft: () => (
              <View style={{marginHorizontal: 10}}>
                <Icon
                  name="arrow-back"
                  size={30}
                  color={Color.white}
                  onPress={() => navigation.goBack()}
                />
              </View>
            ),
          })}
        /> */}

      </Stack.Navigator>
    </>
  );
};

export default App;
