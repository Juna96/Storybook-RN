import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function Headline5({ children, numberOfLines, style }) {
    return (
        <Text numberOfLines={numberOfLines}
            style={[font.fontRegular, {
                fontSize: FontResp(3.5),
                color: warna.primaryText,
                letterSpacing: 0
            }, style]}>{children}</Text>
    );
}


Headline5.defaultProps = {
    children: null,
};

Headline5.propTypes = {
    children: PropTypes.node,
};


export default Headline5;