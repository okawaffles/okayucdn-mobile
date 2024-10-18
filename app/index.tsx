import CDN_CommonHeader from "@/components/CDN_CommonHeader";
import CDN_DefaultPageView from "@/components/CDN_DefaultPageView";
import MyBox_ContentContainer from "@/components/mybox/MyBox_ContentContainer";
import MyBox_Item from "@/components/mybox/MyBox_Item";
import { Colors } from "@/constants/Colors";
import { useEffect } from "react";
import { Appearance, StyleSheet, Text } from "react-native";

// Index has to be mybox cuz shitass

export default function index() {
    return(
        <CDN_DefaultPageView>
            {/* <Text style={style.Text}>My Box</Text> */}
            <CDN_CommonHeader>My Box</CDN_CommonHeader>
            <MyBox_ContentContainer>
                <MyBox_Item>lilydog.png</MyBox_Item>
                <MyBox_Item>lilycat.png</MyBox_Item>
                <MyBox_Item>okayu.png</MyBox_Item>
                <MyBox_Item>korone.png</MyBox_Item>
                <MyBox_Item>kita.png</MyBox_Item>
                <MyBox_Item>bokita.png</MyBox_Item>
                <MyBox_Item>okakoro.png</MyBox_Item>
                <MyBox_Item>photo.png</MyBox_Item>
                <MyBox_Item>overflow.png</MyBox_Item>
                <MyBox_Item>mybox.tsx</MyBox_Item>
                <MyBox_Item>lilydog.png</MyBox_Item>
                <MyBox_Item>lilycat.png</MyBox_Item>
                <MyBox_Item>okayu.png</MyBox_Item>
                <MyBox_Item>korone.png</MyBox_Item>
                <MyBox_Item>kita.png</MyBox_Item>
                <MyBox_Item>bokita.png</MyBox_Item>
                <MyBox_Item>okakoro.png</MyBox_Item>
                <MyBox_Item>photo.png</MyBox_Item>
                <MyBox_Item>overflow.png</MyBox_Item>
                <MyBox_Item>mybox.tsx</MyBox_Item>
            </MyBox_ContentContainer>
        </CDN_DefaultPageView>
    );
}

const style = StyleSheet.create({
    Text: {
        color: Colors.dark.text
    }
});