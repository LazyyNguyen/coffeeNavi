import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Product from '../screens/Product';

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
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
// function Products() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Products!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
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
