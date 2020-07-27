import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from './Typography/Heading';
import { Paragraph, Subtitle1, Subtitle2, Caption, ButtonText1, ButtonText2 } from "./Typography/Type";
import { BtnPrimary, BtnSecondary, BtnSuccess, BtnDanger, BtnWarning } from "./Button/Default";
import { BtnPrimaried, BtnSecondaried } from "./Button/Rounded";
import { warna, FontResp } from '../custome/styles';


storiesOf('Typography', module)
  .add('Heading', () => (
    <CenterView>
      <View style={{ marginBottom: 17 }}>
        <Text style={{ fontWeight: '300' }}>Font Name : FrankRuhlLibre</Text>
        <Text style={{ fontWeight: '300' }}>Font Weight: Medium - Bold</Text>
      </View>
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4>Heading 4</Heading4>
      <Heading5>Heading 5</Heading5>
    </CenterView>
  ))

  .add('Type', () => (
    <CenterView>
      <View style={{ marginBottom: 17 }}>
        <Text style={{ fontWeight: '300' }}>Font Name : FrankRuhlLibre</Text>
        <Text style={{ fontWeight: '300' }}>Font Weight : Regular - Light</Text>
      </View>
      <Subtitle1>Text Subtitle1</Subtitle1>
      <Subtitle2>Text Subtitle2</Subtitle2>
      <ButtonText1>Text Button1</ButtonText1>
      <ButtonText2>Text Button2</ButtonText2>
      <Paragraph>Text Paragraph</Paragraph>
      <Caption>Text Caption</Caption>
    </CenterView>
  ));


storiesOf('Button', module)
  .add('Default', () => (
    <CenterView style={{ justifyContent: 'space-between' }}>
      <View style={{ marginBottom: 17 }}>
        <Heading5>Button Default</Heading5>
      </View>
      {/* Primary */}
      <View style={{ marginVertical: 7 }}>
        <BtnPrimary>
          <ButtonText2 style={{ color: warna.textOrIcon, fontSize: FontResp(2.5) }}>Primary</ButtonText2>
        </BtnPrimary>
      </View>

      {/* Secondary */}
      <View style={{ marginVertical: 7 }}>
        <BtnSecondary>
          <ButtonText2 style={{ color: warna.primaryText, fontSize: FontResp(2.5) }}>Secondary</ButtonText2>
        </BtnSecondary>
      </View>

      {/* Success */}
      <View style={{ marginVertical: 7 }}>
        <BtnSuccess>
          <ButtonText2 style={{ color: warna.textOrIcon, fontSize: FontResp(2.5) }}>Success</ButtonText2>
        </BtnSuccess>
      </View>

      {/* Danger */}
      <View style={{ marginVertical: 7 }}>
        <BtnDanger>
          <ButtonText2 style={{ color: warna.textOrIcon, fontSize: FontResp(2.5) }}>Danger</ButtonText2>
        </BtnDanger>
      </View>

      {/* Warning */}
      <View style={{ marginVertical: 7 }}>
        <BtnWarning>
          <ButtonText2 style={{ color: warna.textOrIcon, fontSize: FontResp(2.5) }}>Warning</ButtonText2>
        </BtnWarning>
      </View>
    </CenterView>
  ))

  .add('Rounded', () => (
    <CenterView style={{ justifyContent: 'space-between' }}>
      <View style={{ marginBottom: 17 }}>
        <Heading5>Button Rounded</Heading5>
      </View>

      {/* Rounded Primary */}
      <View style={{ marginVertical: 7 }}>
        <BtnPrimaried>
          <ButtonText2 style={{ color: warna.textOrIcon, fontSize: FontResp(2.5) }}>Primary Rounded</ButtonText2>
        </BtnPrimaried>
      </View>

      {/* Rounded Sconadry */}
      <View style={{ marginVertical: 7 }}>
        <BtnSecondaried>
          <ButtonText2 style={{ color: warna.primaryText, fontSize: FontResp(2.5) }}>Scondary Rounded</ButtonText2>
        </BtnSecondaried>
      </View>
    </CenterView>
  ))

