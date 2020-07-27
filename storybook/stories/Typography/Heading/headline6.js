import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function Headline6({ children, numberOfLines, style }) {
    return (
        <Text numberOfLines={numberOfLines}
            style={[font.fontMedium, {
                fontSize: FontResp(2.8),
                color: warna.primaryText,
                letterSpacing: 1.25
            }, style]}>{children}</Text>
    );
}


Headline6.defaultProps = {
    children: null,
};

Headline6.propTypes = {
    children: PropTypes.node,
};


export default Headline6;