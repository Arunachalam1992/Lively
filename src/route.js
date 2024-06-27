import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { Badge } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from './Screens/Home/HomeScreen';
import { Iconviewcomponent } from './Components/Icontag';
import Insights from './Screens/Insight/Insights';
import { Manrope } from './Global/FontFamily';
import Color from './Global/Color';
import Community from './Screens/Community/Community';
import ProfileScreen from './Screens/Profile/ProfileScreen';
import Login from './Screens/Auth/Login';
import OTPScreen from './Screens/Auth/OTPScreen';
import { setDataCount } from './Redux/user/UserAction';
import Guides from './Screens/Guides/Guides';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      // options={({ navigation }) => ({
      //   // headerTitle: props => <LogoTitle {...props} />,
      //   headerTitleAlign: 'left',
      //   headerTintColor: Color.white,
      //   headerStyle: { backgroundColor: Color.white, elevation: 1 },
      //   headerLeft: () => (
      //     <NavigationDrawerStructure navigation={navigation} />
      //   ),
      // })}
      />
      {/* <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={({navigation, route}) => ({
          headerTitle: 'About Us',
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
        name="ContactUs"
        component={ContactUs}
        options={({navigation, route}) => ({
          headerTitle: 'Contact Us',
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
        name="FAQs"
        component={FAQs}
        options={({navigation, route}) => ({
          headerTitle: 'FAQs',
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
  );
};

export const InsightStack = () => {
  const notificationCount = useSelector(
    state => state.UserReducer.notificationCount,
  );
  return (
    <Stack.Navigator initialRouteName="Insights">
      <Stack.Screen
        name="Insights"
        component={Insights}
        options={({ navigation }) => ({
          headerTitle: 'Insights',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.black,
            fontFamily: Manrope.Bold,
            fontSize: 18,
          },
          headerStyle: { backgroundColor: Color.white, elevation: 0 },
          headerLeft: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => navigation.goBack()}>
              <Iconviewcomponent
                Icontag={'Ionicons'}
                iconname={'arrow-back'}
                icon_size={26}
                icon_color={Color.black}
              />
            </TouchableOpacity>
          ),
          // headerRight: () => (
          //   <TouchableOpacity
          //     style={{ right: 10 }}
          //   >
          //     <Iconviewcomponent
          //       Icontag={'Ionicons'}
          //       iconname={'notifications-outline'}
          //       icon_size={26}
          //       icon_color={Color.black}
          //     />
          //   </TouchableOpacity>
          // ),
        })}
      />
    </Stack.Navigator>
  );
};

export const CommunityStack = () => {
  const notificationCount = useSelector(
    state => state.UserReducer.notificationCount,
  );
  return (
    <Stack.Navigator initialRouteName="Community">
      <Stack.Screen
        name="Community"
        component={Community}
        options={({ navigation }) => ({
          headerTitle: 'Community',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.black,
            fontFamily: Manrope.Bold,
            fontSize: 18,
          },
          headerStyle: { backgroundColor: Color.white, elevation: 0 },
          headerLeft: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => navigation.goBack()}>
              <Iconviewcomponent
                Icontag={'Ionicons'}
                iconname={'arrow-back'}
                icon_size={26}
                icon_color={Color.black}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
export const GuideStack = () => {
  const notificationCount = useSelector(
    state => state.UserReducer.notificationCount,
  );
  return (
    <Stack.Navigator initialRouteName="Guide">
      <Stack.Screen
        name="Guide"
        component={Guides}
        options={({ navigation }) => ({
          headerTitle: 'Guides',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.black,
            fontFamily: Manrope.Bold,
            fontSize: 18,
          },
          headerStyle: { backgroundColor: Color.white, elevation: 0 },
          headerLeft: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => navigation.goBack()}>
              <Iconviewcomponent
                Icontag={'Ionicons'}
                iconname={'arrow-back'}
                icon_size={26}
                icon_color={Color.black}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  const notificationCount = useSelector(
    state => state.UserReducer.notificationCount,
  );
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerTitle: 'My Account',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.black,
            fontFamily: Manrope.Bold,
            fontSize: 18,
          },
          headerStyle: { backgroundColor: Color.white, elevation: 0 },
          headerLeft: () => (
            // <NavigationDrawerStructure navigation={navigation} home={true} />
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => navigation.goBack()}>
              <Iconviewcomponent
                Icontag={'Ionicons'}
                iconname={'arrow-back'}
                icon_size={26}
                icon_color={Color.black}
              />
            </TouchableOpacity>
          )
        })}
      />

      {/* <Stack.Screen
        name="ProfileView"
        component={ProfileView}
        options={({navigation, route}) => ({
          headerTitle: 'Profile View',
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
        name="EditProfile"
        component={EditProfile}
        options={({navigation, route}) => ({
          headerTitle: 'Edit Profile',
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
  );
};

export const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const userData = useSelector(state => state.UserReducer.userData);
  var { token } = userData;
  const dataCount = useSelector(state => state.UserReducer.count);
  var { wishlist, cart } = dataCount;

  const dispatch = useDispatch();

  useEffect(() => {
    getCountData();
  }, [token]);

  const getCountData = async () => {
    try {
      const getWislist = await fetchData.list_wishlist(``, token);
      const getCart = await fetchData.list_cart(``, token);
      dispatch(
        setDataCount({
          wishlist: getWislist?.count,
          cart: getCart?.count,
        }),
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 55 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route?.name === 'HomeTab') {
            return focused ? (
              <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Iconviewcomponent
                    Icontag={'Ionicons'}
                    iconname={'home'}
                    icon_size={25}
                    icon_color={Color.primary}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color: focused ? Color.primary : '#999999',
                    fontFamily: Manrope.Bold,
                  }}>
                  Home
                </Text>
              </View>
            ) : (
              <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <Iconviewcomponent
                  Icontag={'Ionicons'}
                  iconname={'home-outline'}
                  icon_size={22}
                  icon_color={'#999999'}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? Color.primary : '#999999',
                    fontFamily: Manrope.Bold,
                  }}>
                  Home
                </Text>
              </View>
            );
          } else if (route?.name === 'InsightsTab') {
            return focused ? (
              <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Iconviewcomponent
                    Icontag={'MaterialCommunityIcons'}
                    iconname={'television-guide'}
                    icon_size={25}
                    icon_color={Color.primary}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color: focused ? Color.primary : '#999999',
                    fontFamily: Manrope.Bold,
                  }}>
                  Insights
                </Text>
              </View>
            ) : (
              <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <Iconviewcomponent
                  Icontag={'MaterialCommunityIcons'}
                  iconname={'television'}
                  icon_size={22}
                  icon_color={'#999999'}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? Color.primary : '#999999',
                    fontFamily: Manrope.Bold,
                  }}>
                  Insights
                </Text>
              </View>
            );
          } else if (route?.name === 'CommunityTab') {
            return focused ? (
              <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Iconviewcomponent
                    Icontag={'MaterialCommunityIcons'}
                    iconname={'account-group'}
                    icon_size={25}
                    icon_color={Color.primary}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color: focused ? Color.primary : '#999999',
                    fontFamily: Manrope.Bold,
                  }}>
                  Community
                </Text>
              </View>
            ) : (
              <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <Iconviewcomponent
                  Icontag={'MaterialCommunityIcons'}
                  iconname={'account-group-outline'}
                  icon_size={22}
                  icon_color={'#999999'}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? Color.primary : '#999999',
                    fontFamily: Manrope.Bold,
                  }}>
                  Community
                </Text>
              </View>
            );
          } else if (route?.name === 'GuideTab') {
            return focused ? (
              <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Iconviewcomponent
                    Icontag={'MaterialCommunityIcons'}
                    iconname={'book-multiple'}
                    icon_size={25}
                    icon_color={Color.primary}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color: focused ? Color.primary : '#999999',
                    fontFamily: Manrope.Bold,
                  }}>
                  Guides
                </Text>
              </View>
            ) : (
              <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <Iconviewcomponent
                  Icontag={'MaterialCommunityIcons'}
                  iconname={'book-multiple-outline'}
                  icon_size={22}
                  icon_color={'#999999'}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? Color.primary : '#999999',
                    fontFamily: Manrope.Bold,
                  }}>
                  Guides
                </Text>
              </View>
            );
          }
          else if (route?.name === 'ProfileTab') {
            return focused ? (
              <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Iconviewcomponent
                    Icontag={'FontAwesome'}
                    iconname={'user'}
                    icon_size={25}
                    icon_color={Color.primary}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color: focused ? Color.primary : '#999999',
                    fontFamily: Manrope.Bold,
                  }}>
                  Profile
                </Text>
              </View>
            ) : (
              <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <Iconviewcomponent
                  Icontag={'FontAwesome'}
                  iconname={'user-o'}
                  icon_size={22}
                  icon_color={'#999999'}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? Color.primary : '#999999',
                    fontFamily: Manrope.Bold,
                  }}>
                  Profile
                </Text>
              </View>
            );
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Color.primary,
        tabBarInactiveTintColor: Color.smokeyGrey,
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="InsightsTab"
        component={InsightStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CommunityTab"
        component={CommunityStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="GuideTab"
        component={GuideStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
