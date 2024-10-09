import { useEffect } from 'react';
import { Text } from 'react-native';

import { useFonts } from 'expo-font';

import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import globalStyles from '@/globals/globalStyles';

import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        Fredoka: require('../assets/fonts/Fredoka-VariableFont.ttf'),
        RobotoMono: require('../assets/fonts/RobotoMono-VariableFont.ttf'),
        Playfair: require('../assets/fonts/PlayfairDisplay-VariableFont.ttf'),
        PlayfairItalic: require('../assets/fonts/PlayfairDisplay-Italic-VariableFont.ttf'),
    });

    useEffect(() => {
        if (loaded)
            SplashScreen.hideAsync();
    }, [loaded]);

    if (!loaded) return null;

    return (
        <Stack
            screenOptions={
                {
                    contentStyle: {
                        backgroundColor: globalStyles.black,
                        paddingTop: 40,
                        padding: 20
                    },
                    headerShown: false,
                }
            }
        >
            <Stack.Screen name="home" />

            <Stack.Screen name="login" />

            <Stack.Screen name="+not-found" />
        </Stack>
    );
}
