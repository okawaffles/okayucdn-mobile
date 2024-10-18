import { Colors } from "@/constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

interface MyBox_ItemProps {
    children: ReactNode
}

export default function MyBox_Item({children}: MyBox_ItemProps) {
    return(
        <View style={style.Container}>
            <Text style={style.Text}>{children}</Text>
            <FontAwesome5 name="caret-right" style={style.Icon} size={24}></FontAwesome5>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        backgroundColor: Colors.dark.background,
        borderColor: Colors.dark.okayucdn_blue_hover,
        borderWidth: 3,
        borderRadius: 16,
        padding: 12,
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5
    },
    Text: {
        color: Colors.dark.text,
        fontSize: 20,
        fontFamily: 'GenJyuuGothic'
    },
    Icon: {
        color: Colors.dark.text,
    }
})