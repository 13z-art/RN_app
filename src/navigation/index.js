import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../features/home/Home'
import Category from '../features/category/Category'

const Tab = createBottomTabNavigator();

const screenOptions = (route) =>{
  tabBarIcon: ({ focused, color, size}) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
    } else if (route.name === 'Category') {
       iconName = focused ? 'ios-list-box' : 'ios-list';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  }
}

const AppNavigator = () =>{
 return (
    <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => screenOptions(route)}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Category" component={Category} />
          </Tab.Navigator>
        </NavigationContainer>
   );
};

export default AppNavigator;
