import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { warna, font, FontResp, screen } from "../../../custome/styles";

function BtnPrimary({ children, style, onPress }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: warna.primaryColor,
                paddingHorizontal: FontResp(7), paddingVertical: FontResp(2),
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 2
            }}
            onPress={onPress}
        >{children}</TouchableOpacity>
    );
}


BtnPrimary.defaultProps = {
    children: null,
};

BtnPrimary.propTypes = {
    children: PropTypes.node,
};


export default BtnPrimary;