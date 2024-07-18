import React from 'react';
import {
  LogBox,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';

import {Provider as PaperProvider} from 'react-native-paper';
import {navigationRef} from '../RootNavigation';
import Store from './Redux/Store';
import Color from './Global/Color';
import CustomDrawerContent from './Components/Nav/CustomDrawerContent';
import Splash from './Splash';
import TabNavigator, { Auth } from './Components/route';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

LogBox.ignoreAllLogs;

const MyDrawer = () => {
  return (
    <PaperProvider>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{swipeEnabled: false}}
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen
            name="Home"
            component={MainApp}
            options={{headerShown: false}}
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
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default App;
