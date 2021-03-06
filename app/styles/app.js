import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "page-title": {
        "marginTop": 2.5,
        "marginRight": 0,
        "marginBottom": 2.5,
        "marginLeft": 0
    },
    "input[type=\"search\"]": {
        "borderRadius": 4
    }
});