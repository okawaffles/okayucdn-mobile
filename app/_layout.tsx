import { Colors } from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { useEffect } from "react";
import { Appearance, StyleSheet } from "react-native";

// https://www.reddit.com/r/expo/comments/12mmk0w/comment/jx57iil/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

export default function RootLayout() {
    const [loaded, error] = useFonts({
        'GenJyuuGothic': require('../assets/fonts/GenJyuuGothic.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }


    return (
        <Tabs initialRouteName="mybox"
            screenOptions={{
                tabBarActiveTintColor: Colors.dark.tabIconSelected,
                tabBarStyle: {
                    backgroundColor: Colors.dark.backgroundCompliment,
                    borderColor: Colors.dark.backgroundCompliment,
                    paddingTop: 10,
                    paddingBottom: 10,
                    height: 70,
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontFamily: 'GenJyuuGothic',
                }
            }}
        >
            <Tabs.Screen name="index" options={{
                title: "My Box",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="box" size={size} color={color} />
                ),
            }} />


            <Tabs.Screen name="upload" options={{
                title: "Upload",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="upload" size={size} color={color} />
                ),
            }}
            />

            <Tabs.Screen name="settings" options={{
                title: "Settings",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="cog" size={size} color={color} />
                ),
            }}
            />
        </Tabs>
    );
}

const style = StyleSheet.create({
    Tabs: {
        backgroundColor: Colors.dark.tint
    }
});