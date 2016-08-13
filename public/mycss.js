import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "DragArea": {
        "backgroundColor": "white",
        "borderStyle": "dashed",
        "borderColor": "#dadfe3",
        "borderRadius": 5
    },
    "title": {
        "color": "#8e99a5",
        "fontWeight": "bold",
        "fontSize": 164,
        "textAlign": "center"
    },
    "title2": {
        "textAlign": "center",
        "color": "#8e99a5",
        "fontWeight": "bold",
        "fontSize": 25
    },
    "link-skin": {
        "cursor": "pointer",
        "backgroundColor": "#0099ff",
        "fontWeight": "bold",
        "fontSize": 18,
        "textDecoration": "none",
        "textAlign": "center",
        "borderBottom": "9px #006bb3 solid",
        "borderRadius": 20,
        "width": "100%",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "title3": {
        "color": "#fff",
        "textAlign": "center"
    },
    "fileUpload": {
        "position": "relative",
        "overflow": "hidden",
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "fileUpload inputupload": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 20,
        "cursor": "pointer",
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "map-pic": {
        "width": "100%",
        "height": "100%"
    },
    "imgTest": {
        "textAlign": "center"
    },
    "imgTest img": {
        "maxWidth": "100%"
    },
    "// circlecircle-ripple": {
        "backgroundColor": "#35ffc3",
        "width": 1,
        "height": 1,
        "borderRadius": "50%",
        "animation": "ripple 0.7s linear infinite"
    }
});