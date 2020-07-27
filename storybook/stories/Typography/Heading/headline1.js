import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function Headline1({ children, numberOfLines, style }) {
    return (
        <Text numberOfLines={numberOfLines}
            style={[font.fontLight, {
                fontSize: FontResp(9),
                color: warna.primaryText,
                letterSpacing: -1.5
            }, style]}>{children}</Text>
    );
}


Headline1.defaultProps = {
    children: null,
};

Headline1.propTypes = {
    children: PropTypes.node,
};


export default Headline1;