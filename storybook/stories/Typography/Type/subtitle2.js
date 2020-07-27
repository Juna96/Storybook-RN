import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function Subtitle2({ children, numberOfLines, style }) {
    return (
        <Text numberOfLines={numberOfLines}
            style={[font.fontMedium, {
                fontSize: FontResp(2),
                color: warna.primaryText,
                letterSpacing: 0.2
            }, style]}>{children}</Text>
    );
}


Subtitle2.defaultProps = {
    children: null,
};

Subtitle2.propTypes = {
    children: PropTypes.node,
};


export default Subtitle2;