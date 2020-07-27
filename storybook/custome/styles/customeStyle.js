import React, { useEffect, useState } from "react";
import { Platform, StatusBar, Dimensions, StyleSheet, PixelRatio, InteractionManager } from "react-native";

export const screen = Dimensions.get('window');

export const warna = {
    cream: '#f5e787',
    primaryColor: '#4287f5',
    textOrIcon: '#FEFEFE',
    textOrIcon2: '#e8eaed',
    bgSmoke: '#E5E5E5',
    primaryText: '#021129',
    scondaryText: '#757575',
    smoke: '#EBEEEE',
    white: '#F4F5FA',
    hijau: '#72ff5c',
    orange: '#fce84e',
    borderColor: '#e0e3eb',
    merah:'#ff5c5c'
}

export const font = StyleSheet.create({
    fontLight: {
        fontFamily: 'FrankRuhlLibre-Light'
    },
    fontRegular: {
        fontFamily: 'FrankRuhlLibre-Regular'
    },
    fontMedium: {
        fontFamily: 'FrankRuhlLibre-Medium'
    },
    fontBold: {
        fontFamily: 'FrankRuhlLibre-Bold'
    }
});

export function FontResp(percent) {
    var deviceHeight = Platform.OS === "android" ? screen.height - StatusBar.currentHeight : screen.height;
    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent);
}

export const cust_styles = StyleSheet.create({
    wrapRounded: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        height: 56,
        width: 56,

    },
    wrapIconHeader: {
        height: 56,
        width: 56,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
})

const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
export {
    widthPercentageToDP,
    heightPercentageToDP
};