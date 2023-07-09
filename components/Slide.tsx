import { View, Text, Dimensions } from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");

interface SlideProps {
  label: string;
  right?: boolean;
}

const Slide = ({ label, right }: SlideProps) => {
  const transform = [
    { translateY: (0.61 * height - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  return (
    <View style={{ width: width }} className="">
      <View className=" h-24 justify-center" style={{ transform: transform }}>
        <Text
          className="text-7xl text-white text-center"
          style={{ fontFamily: "SFProBold" }}
        >
          {label}
        </Text>
      </View>
    </View>
  );
};

export default Slide;
