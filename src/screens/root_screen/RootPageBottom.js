import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../bottom_tabs/HomeScreen'
import SearchScreen from '../bottom_tabs/SearchScreen';
import PostScreen from '../bottom_tabs/PostScreen'
import NotificationScreen from '../bottom_tabs/NotificationScreen'
import MessagesScreen from '../bottom_tabs/MessagesScreen'

const Tabs = createBottomTabNavigator()

const RootPageBottom = () => {
  // const { colors } = useTheme()
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarHideOnKeyboard:true,
        tabBarShowLabel:false
      })}
    >


      <Tabs.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon name="home" color={color} size={26} />
          ),
        }}
      />


      <Tabs.Screen name="Search" component={SearchScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon name="search" color={color} size={26} />
          ),
        }}
      />

      <Tabs.Screen name="Post" component={PostScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon name="plus" color={color} size={26} />
          ),
        }}
      />


      <Tabs.Screen name="Notifications" component={NotificationScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon name="bell" color={color} size={26} />
          ),
        }}
      />

      <Tabs.Screen name="Messages" component={MessagesScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon name="envelope" color={color} size={26} />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}

export default RootPageBottom;