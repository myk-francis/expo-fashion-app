import { View, Text, Dimensions } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Slide from "../../components/Slide";

const { height, width } = Dimensions.get("window");

const OnboardingScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <View
        className="bg-cyan-300"
        style={{ height: height * 0.61, borderBottomRightRadius: 75 }}
      >
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Excentric" />
          <Slide label="Funky" right />
        </ScrollView>
      </View>
      <View className="flex-1">
        <View className="h-full w-full bg-cyan-300 absolute" style={{}} />
        <View className="flex-1 bg-white" style={{ borderTopLeftRadius: 75 }} />
      </View>
    </View>
  );
};

export default OnboardingScreen;
