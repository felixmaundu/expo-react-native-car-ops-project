import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PostCardItem from '../../components/PostCardItem';
import HomeAppBar from '../../components/HomeAppBar';
import StatusBarComponent from '../../components/StatusBarComponent';

const HomeScreen = () => {
  return (
    <View style={{}}>
      <StatusBarComponent />
      <SafeAreaView>
        <HomeAppBar/>
        <Text>Home!</Text>
        <PostCardItem/>
      </SafeAreaView>

    </View>
  );
}
export default HomeScreen;
