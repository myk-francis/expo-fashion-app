import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(onboarding)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SFProBold: require("../assets/fonts/SFPro-Display-Bold.ttf"),
    SFProMedium: require("../assets/fonts/SFPro-Display-Medium.ttf"),
    SFProRegular: require("../assets/fonts/SFPro-Display-Regular.ttf"),
    SFProSemibold: require("../assets/fonts/SFPro-Display-Semibold.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    const hindSplashScreen = async () => {
      if (!loaded) await SplashScreen.hideAsync();
    };

    if (error) throw error;

    hindSplashScreen();
  }, [error, loaded]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  return (
    <>
      <Stack initialRouteName="(onboarding)">
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(shome)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
