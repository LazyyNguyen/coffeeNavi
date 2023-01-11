import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChangePassword from '../components/EditProfile/ChangePassword';
import UpdateProfile from '../components/EditProfile/UpdateProfile';
import Loading from '../components/Loading';
import Login from '../components/signIn/Login';
import SignUp from '../components/signIn/SignUp';
import CreateProduct from '../screens/CreateProduct';
import Home from '../screens/Home';
import Product from '../screens/Product';
import Details from '../screens/ProductDetails';
import Profile from '../screens/Profile';
import UpdateProduct from '../screens/UpdateProduct';

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

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Loading"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: () => <Icon name="home" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="ManagementRevenue"
        component={ManagementRevenue}
        options={{
          tabBarLabel: 'Revenue',
          tabBarIcon: () => <Icon name="tag" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="Products"
        component={Product}
        options={{
          headerShown: false,
          tabBarLabel: 'Updates',
          tabBarIcon: () => <Icon name="coffee" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="ManagementProduct"
        component={ManagementProduct}
        options={{
          tabBarLabel: 'Management',
          tabBarIcon: () => <Icon name="list" size={20} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <Icon name="user" size={20} color="black" />,
          headerShown: false,
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
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tab" component={MyTabs} />
        <Stack.Screen name="Detail" component={Details} />
        <Stack.Screen name="addNew" component={CreateProduct} />
        <Stack.Screen name="productUpdate" component={UpdateProduct} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
