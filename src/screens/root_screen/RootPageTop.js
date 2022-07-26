import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';






const TabT = createMaterialTopTabNavigator();
///////////////////////////////////////////
const HomeStack = createMaterialTopTabNavigator();

const MyTabs = ({ state, descriptors, navigation, position }) =>{
  return (

    <TabT.Navigator>
      {/* <LeftDrawerScreen/> */}
      <HomeStack.Screen name="Upcoming" component={UpcomingScreen} 
       options={{
        tabBarLabel: 'All',
        // tabBarIcon: ({ color }) => (
        //   <Icon name="search" color={color} size={26} />
        // ),
      }}
      />
      <HomeStack.Screen name="Today" component={TodayScreen} 
       options={{
        tabBarLabel: 'Top Checks',
        // tabBarIcon: ({ color }) => (
        //   <Icon name="search" color={color} size={26} />
        // ),
      }}
      />
      <HomeStack.Screen name="Tips" component={TodayScreen} 
       options={{
        tabBarLabel: 'Today',
        // tabBarIcon: ({ color }) => (
        //   <Icon name="search" color={color} size={26} />
        // ),
      }}/>
      <HomeStack.Screen name="Categories" component={TodayScreen} 
       options={{
        tabBarLabel: 'Today',
        // tabBarIcon: ({ color }) => (
        //   <Icon name="search" color={color} size={26} />
        // ),
      }}/>
      <HomeStack.Screen name="Today" component={TodayScreen} 
       options={{
        tabBarLabel: 'Today',
        // tabBarIcon: ({ color }) => (
        //   <Icon name="search" color={color} size={26} />
        // ),
      }}/>
      <HomeStack.Screen name="Today" component={TodayScreen} 
       options={{
        tabBarLabel: 'Today',
        // tabBarIcon: ({ color }) => (
        //   <Icon name="search" color={color} size={26} />
        // ),
      }}/><HomeStack.Screen name="Today" component={TodayScreen} 
      options={{
       tabBarLabel: 'Today',
       // tabBarIcon: ({ color }) => (
       //   <Icon name="search" color={color} size={26} />
       // ),
     }}/>
    </TabT.Navigator>

  );
}
export default MyTabs;