import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import MyTextInput from '../components/MyTextInput';
import MyButton from '../components/MyButton';
import Loading from '../components/Loading';
import Main from '../components/signIn/Main';
import SignUp from '../components/signIn/SignUp';
import Login from '../components/signIn/Login';
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
function Products() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Products!</Text>
    </View>
  );
}

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
        component={Products}
        options={{
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
          tabBarButton: props => null, //like this
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
