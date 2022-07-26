import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { StatusBar } from 'expo-status-bar';

const HomeAppBar =()=> {
    return (
      <View style={{ 
       justifyContent: 'center', 
       alignItems: 'center',
       height:50,
       backgroundColor:'white',
       elevation:2
    }}>
        {/* <ExpoStatusBar/> */}
       
       
        
        
       

       <View>
       <Text>Home O p s</Text>
       </View>
       
        
        
      </View>
    );
  }
export default HomeAppBar;
  