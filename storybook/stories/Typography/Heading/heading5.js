import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function Heading5({ children, numberOfLines, style }) {
    return (
        <Text numberOfLines={numberOfLines}
            style={[font.fontMedium, {
                fontSize: FontResp(3),
                color: warna.primaryText,
                // letterSpacing: -0.5
            }, style]}>{children}</Text>
    );
}


Heading5.defaultProps = {
    children: null,
};

Heading5.propTypes = {
    children: PropTypes.node,
};


export default Heading5;