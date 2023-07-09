import { View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React from "react";
import Slide from "../../components/Slide";
// import {
//   interpolateColor,
//   useScrollHandler,
//   useValue,
//   onScrollEvent,
// } from "react-native-redash";
// import Animated, {
//   divide,
//   Extrapolate,
//   interpolate,
//   multiply,
// } from "react-native-reanimated";

const { height, width } = Dimensions.get("window");

const slides = [
  {
    label: "Relaxed",
    subtitle: "Find Your Outfit",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
    // picture: {
    //   src: require("../assets/1.png"),
    //   width: 730,
    //   height: 1095,
    // },
  },
  {
    label: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    // picture: {
    //   src: require("../assets/2.png"),
    //   width: 690,
    //   height: 1070,
    // },
  },
  {
    label: "Original",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    // picture: {
    //   src: require("../assets/3.png"),
    //   width: 730,
    //   height: 1095,
    // },
  },
  {
    label: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    // picture: {
    //   src: require("../assets/4.png"),
    //   width: 616,
    //   height: 898,
    // },
  },
];

const OnboardingScreen = () => {
  // const x = useValue(0);
  // const onScroll = onScrollEvent({ x });
  // // const { scrollHandler } = useScrollHandler();
  // const backgroundColor = interpolateColor(x, {
  //   inputRange: slides.map((_, i) => i * width),
  //   outputRange: slides.map((slide) => slide.color),
  // });

  return (
    <View className="flex-1 bg-white">
      <View
        className=""
        style={{
          height: height * 0.61,
          borderBottomRightRadius: 75,
          // backgroundColor,
        }}
      >
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
          // {...{ onScroll }}
        >
          {slides.map(({ label }, index) => (
            <Slide key={index} right={!(index % 2)} {...{ label }} />
          ))}
        </ScrollView>
      </View>
      <View className="flex-1">
        <View
          className="h-full w-full  absolute"
          // @ts-ignore
          style={{ backgroundColor: backgroundColor }}
        />
        <View className="flex-1 bg-white" style={{ borderTopLeftRadius: 75 }} />
      </View>
    </View>
  );
};

export default OnboardingScreen;
