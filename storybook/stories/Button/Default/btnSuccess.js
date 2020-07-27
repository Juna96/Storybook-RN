import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, ViewPropTypes } from 'react-native';
import { warna, font, FontResp, screen } from "../../../custome/styles";

function BtnSuccess({ children, style, onPress }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: warna.hijau,
                paddingHorizontal: FontResp(7), paddingVertical: FontResp(2),
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 2
            }, style}
            onPress={onPress}
        >{children}</TouchableOpacity>
    );
}


BtnSuccess.defaultProps = {
    children: null,
    style: {
        backgroundColor: warna.hijau,
        paddingHorizontal: FontResp(7), paddingVertical: FontResp(2),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    }
};

BtnSuccess.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
};


export default BtnSuccess;