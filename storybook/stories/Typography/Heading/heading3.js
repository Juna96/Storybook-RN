import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function Heading3({ children, numberOfLines, style }) {
    return (
        <Text numberOfLines={numberOfLines}
            style={[font.fontMedium, {
                fontSize: FontResp(5),
                color: warna.primaryText,
                letterSpacing: -0.5
            }, style]}>{children}</Text>
    );
}


Heading3.defaultProps = {
    children: null,
};

Heading3.propTypes = {
    children: PropTypes.node,
};


export default Heading3;