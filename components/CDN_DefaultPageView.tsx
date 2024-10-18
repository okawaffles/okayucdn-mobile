import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Children, ReactNode } from 'react';
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CDN_DefaultPageViewProps {
    children?: ReactNode
}

export default function CDN_DefaultPageView({ children }: CDN_DefaultPageViewProps) {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={styles.SafeView}>
            <View style={[styles.View, {paddingTop: insets.top + 10, paddingBottom: 100}]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: Colors.dark.background,
        color: Colors.dark.text
    },
    SafeView: {
        flex: 1,
    }
});