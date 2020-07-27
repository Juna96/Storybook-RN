import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function Headline2({ children, numberOfLines, style }) {
    return (
        <Text numberOfLines={numberOfLines}
            style={[font.fontLight, {
                fontSize: FontResp(8),
                color: warna.primaryText,
                letterSpacing: -0.5
            }, style]}>{children}</Text>
    );
}


Headline2.defaultProps = {
    children: null,
};

Headline2.propTypes = {
    children: PropTypes.node,
};


export default Headline2;