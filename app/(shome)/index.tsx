import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-slate-800">Styling just works! 🎉</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
