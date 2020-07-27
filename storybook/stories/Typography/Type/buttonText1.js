import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { warna, font, FontResp } from "../../../custome/styles";

function ButtonText1({ children, numberOfLines, style, onPress }) {
    return (
        <Text numberOfLines={numberOfLines}
            onPress={onPress}
            style={[font.fontMedium, {
                fontSize: FontResp(2),
                color: warna.primaryText,
                letterSpacing: 0.5,
                textDecorationLine: 'underline'
            }, style]}>{children}</Text>
    );
}


ButtonText1.defaultProps = {
    children: null,
};

ButtonText1.propTypes = {
    children: PropTypes.node,
};


export default ButtonText1;