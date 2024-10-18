import { Colors } from "@/constants/Colors";
import React, { ReactNode, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";


interface MyBox_ContentContainerProps {
    children?: ReactNode
}

export default function MyBox_ContentContainer({ children }: MyBox_ContentContainerProps) {
    return (
        <View style={style.View}>
            <Text style={style.Text}>Content</Text>
            <ScrollView style={style.ContentView}>
                {children}
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    Text: {
        color: Colors.dark.text,
        fontSize: 24,
        fontFamily: 'GenJyuuGothic',
        textAlign: 'center',
        paddingBottom: 12
    },
    View: {
        backgroundColor: Colors.dark.backgroundCompliment,
        borderRadius: 24,
        padding: 10,
        width: '95%'
    },
    ContentView: {
        flex: 0.85,
        overflow: 'scroll',
        padding: 6,
        borderRadius: 24,

    }
})