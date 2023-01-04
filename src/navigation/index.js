import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loading from '../components/Loading';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import Login from '../components/signIn/Login';
import Main from '../components/signIn/Main';
import SignUp from '../components/signIn/SignUp';
import Details from '../screens/Details';
import Product from '../screens/Product';
function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
      <MyTextInput
        title="UserName"
        type="rounder"
        placeholder="Enter Your ..."
      />
      <MyTextInput
        title="UserName"
        type="rounder"
        placeholder="Enter Your ..."
      />
      <MyButton size="large" lable="Login" />
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}
function ManagementRevenue() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ManagementRevenue!</Text>
    </View>
  );
}
function ManagementProduct() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ManagementProduct!</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Loading"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" size={20} />,
        }}
      />
      <Tab.Screen
        name="ManagementRevenue"
        component={ManagementRevenue}
        options={{
          tabBarLabel: 'Revenue',
          tabBarIcon: () => <Icon name="tag" size={20} />,
        }}
      />
      <Tab.Screen
        name="Products"
        component={Product}
        options={{
          headerShown: false,
          tabBarLabel: 'Updates',
          tabBarIcon: () => <Icon name="coffee" size={20} />,
        }}
      />
      <Tab.Screen
        name="ManagementProduct"
        component={ManagementProduct}
        options={{
          tabBarLabel: 'Management',
          tabBarIcon: () => <Icon name="list" size={20} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <Icon name="user" size={20} />,
        }}
      />
      <Tab.Screen
        name="Loading"
        component={Loading}
        options={{
          tabBarButton: props => null, //like this
        }}
      />
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarButton: props => null, //like this
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          tabBarButton: props => null, //like this
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarButton: props => null, //like this
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tab" component={MyTabs} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
