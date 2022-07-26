import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { StatusBar } from 'expo-status-bar';

const StatusBarComponent =()=> {
    return (
      <View style={{ 
       justifyContent: 'center', 
       alignItems: 'center',
       elevation:2,
       backgroundColor:'gray'
    }}>
       
        <StatusBar style='dark'/>
      </View>
    );
  }
export default StatusBarComponent;