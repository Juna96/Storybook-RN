import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function Heading1({ children, numberOfLines, style }) {
    return (
        <Text numberOfLines={numberOfLines}
            style={[font.fontBold, {
                fontSize: FontResp(7),
                color: warna.primaryText,
                letterSpacing: -1.5
            }, style]}>{children}</Text>
    );
}


Heading1.defaultProps = {
    children: null,
};

Heading1.propTypes = {
    children: PropTypes.node,
};


export default Heading1;