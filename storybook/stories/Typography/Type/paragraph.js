import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function Paragraph({ children, numberOfLines, style }) {
    return (
        <Text numberOfLines={numberOfLines}
            style={[font.fontRegular, {
                fontSize: FontResp(2),
                color: warna.primaryText,
                letterSpacing: 0.4
            }, style]}>{children}</Text>
    );
}


Paragraph.defaultProps = {
    children: null,
};

Paragraph.propTypes = {
    children: PropTypes.node,
};


export default Paragraph;