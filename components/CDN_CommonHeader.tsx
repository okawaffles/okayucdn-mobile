import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface CDN_CommonHeaderProps {
    children: ReactNode
}

export default function CDN_CommonHeader({children}: CDN_CommonHeaderProps) {
    return(
        <Text style={style.Header}>{children}</Text>
    );
}

const style = StyleSheet.create({
    Header: {
        fontSize: 48,
        fontFamily: 'GenJyuuGothic',
        color: Colors.dark.text,
        alignSelf: 'flex-start',
        textAlign: 'center',
        width: '100%',
        paddingBottom: 16
    }
})