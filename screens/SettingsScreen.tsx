import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Button from "../components/Button";

interface SettingsScreenProps{
  navigation:any
  route:any
}

const SettingsScreen:React.FC<SettingsScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-16">
        <View className="flex justify-center items-center h-screen">
          <Text className="text-2xl text-teal-900 text-center m-5">
            You are at Settings Screen
          </Text>
          <Button navigation={navigation} text="Open Settings"/>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default SettingsScreen;
