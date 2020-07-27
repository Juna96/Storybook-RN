import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function ButtonText2({ children, numberOfLines, style, onPress }) {
    return (
        <Text numberOfLines={numberOfLines}
            onPress={onPress}
            style={[font.fontBold, {
                fontSize: FontResp(2),
                color: warna.primaryText,
                letterSpacing: 0.75,
                // textDecorationLine: 'underline'
            }, style]}>{children}</Text>
    );
}


ButtonText2.defaultProps = {
    children: null,
};

ButtonText2.propTypes = {
    children: PropTypes.node,
};


export default ButtonText2;