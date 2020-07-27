import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function Caption({ children, numberOfLines, style }) {
    return (
        <Text numberOfLines={numberOfLines}
            style={[font.fontRegular, {
                fontSize: FontResp(1.8),
                color: warna.primaryText,
                letterSpacing: 0.5
            }, style]}>{children}</Text>
    );
}


Caption.defaultProps = {
    children: null,
};

Caption.propTypes = {
    children: PropTypes.node,
};


export default Caption;