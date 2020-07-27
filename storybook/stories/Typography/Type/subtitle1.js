import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function Subtitle1({ children, numberOfLines, style }) {
    return (
        <Text numberOfLines={numberOfLines}
            style={[font.fontRegular, {
                fontSize: FontResp(2.2),
                color: warna.primaryText,
                letterSpacing: 0.15
            }, style]}>{children}</Text>
    );
}


Subtitle1.defaultProps = {
    children: null,
};

Subtitle1.propTypes = {
    children: PropTypes.node,
};


export default Subtitle1;