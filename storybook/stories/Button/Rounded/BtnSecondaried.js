import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { warna, font, FontResp, screen } from "../../../custome/styles";

function BtnSecondaried({ children, style, onPress }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: warna.smoke,
                paddingHorizontal: FontResp(7), paddingVertical: FontResp(2),
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 2
            }}
            onPress={onPress}
        >{children}</TouchableOpacity>
    );
}


BtnSecondaried.defaultProps = {
    children: null,
};

BtnSecondaried.propTypes = {
    children: PropTypes.node,
};


export default BtnSecondaried;