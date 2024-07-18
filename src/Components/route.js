import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import InsightScreen from '../Screens/Insights/InsightScreen';
import CommunityScreen from '../Screens/Community/CommunityScreen';
import GuideScreen from '../Screens/Guides/GuideScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import Login from '../Screens/Auth/Login';
import OTPScreen from '../Screens/Auth/OTPScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import Color from '../Global/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Iconviewcomponent} from './Icontag';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const InsightStack = () => {
  return (
    <Stack.Navigator initialRouteName="Insights">
      <Stack.Screen
        name="Insights"
        component={InsightScreen}
        options={({navigation}) => ({
          headerTitle: 'Wish List',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.black,
            fontSize: 18,
          },
          headerStyle: {backgroundColor: Color.white},
          headerLeft: () => (
            <View style={{marginHorizontal: 10}}>
              <Icon
                name="arrow-back"
                size={30}
                color={Color.black}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export const CommunityStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Community"
        component={CommunityScreen}
        options={({navigation}) => ({
          headerTitle: 'My Cart',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.black,
            fontSize: 18,
          },
          headerStyle: {backgroundColor: Color.white},
          headerLeft: () => (
            <View style={{marginHorizontal: 10}}>
              <Icon
                name="arrow-back"
                size={30}
                color={Color.black}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export const GuideStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Guide"
        component={GuideScreen}
        options={({navigation}) => ({
          headerTitle: 'My Account',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.black,
            fontSize: 18,
          },
          headerStyle: {backgroundColor: Color.white},
          headerLeft: () => (
            <View style={{marginHorizontal: 10}}>
              <Icon
                name="arrow-back"
                size={30}
                color={Color.black}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({navigation}) => ({
          headerTitle: 'My Account',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.black,
            fontSize: 18,
          },
          headerStyle: {backgroundColor: Color.white},
          headerLeft: () => (
            <View style={{marginHorizontal: 10}}>
              <Icon
                name="arrow-back"
                size={30}
                color={Color.black}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 55,
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          marginBottom: 10,
          marginHorizontal: '5%',
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route?.name === 'HomeTab') {
            return (
              <View style={styles.iconContainer}>
                <Iconviewcomponent
                  Icontag={'Ionicons'}
                  iconname={'home'}
                  icon_size={22}
                  iconstyle={{color: color, marginHorizontal: 5}}
                />
                <Text style={[styles.iconText, {color: color}]}>Home</Text>
              </View>
            );
          } else if (route?.name === 'InsightTab') {
            return (
              <View style={styles.iconContainer}>
                <Iconviewcomponent
                  Icontag={'Ionicons'}
                  iconname={'tv'}
                  icon_size={22}
                  iconstyle={{color: color, marginHorizontal: 5}}
                />
                <Text style={[styles.iconText, {color: color}]}>Insights</Text>
              </View>
            );
          } else if (route?.name === 'CommunityTab') {
            return (
              <View style={styles.iconContainer}>
                <Iconviewcomponent
                  Icontag={'MaterialIcons'}
                  iconname={'people-alt'}
                  icon_size={22}
                  iconstyle={{color: color, marginHorizontal: 5}}
                />
                <Text style={[styles.iconText, {color: color}]}>Community</Text>
              </View>
            );
          } else if (route?.name === 'GuideTab') {
            return (
              <View style={styles.iconContainer}>
                <Iconviewcomponent
                  Icontag={'FontAwesome5'}
                  iconname={'book'}
                  icon_size={22}
                  iconstyle={{color: color, marginHorizontal: 5}}
                />
                <Text style={[styles.iconText, {color: color}]}>Guides</Text>
              </View>
            );
          } else if (route?.name === 'ProfileTab') {
            return (
              <View style={styles.iconContainer}>
                <FontAwesome name={'user'} size={22} color={color} />
                <Text style={[styles.iconText, {color: color}]}>Profile</Text>
              </View>
            );
          }
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Color.black,
        tabBarInactiveTintColor: '#999999',
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="InsightTab"
        component={InsightStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="CommunityTab"
        component={CommunityStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="GuideTab"
        component={GuideStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconText: {
    fontSize: 12,
  },
  dummyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TabNavigator;
