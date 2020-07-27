import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function Heading2({ children, numberOfLines, style }) {
    return (
        <Text numberOfLines={numberOfLines}
            style={[font.fontMedium, {
                fontSize: FontResp(6),
                color: warna.primaryText,
                letterSpacing: -1
            }, style]}>{children}</Text>
    );
}


Heading2.defaultProps = {
    children: null,
};

Heading2.propTypes = {
    children: PropTypes.node,
};


export default Heading2;