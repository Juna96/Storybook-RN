import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function Headline4({ children, numberOfLines, style }) {
    return (
        <Text numberOfLines={numberOfLines}
            style={[font.fontRegular, {
                fontSize: FontResp(4),
                color: warna.primaryText,
                letterSpacing: 0.25
            }, style]}>{children}</Text>
    );
}


Headline4.defaultProps = {
    children: null,
};

Headline4.propTypes = {
    children: PropTypes.node,
};


export default Headline4;