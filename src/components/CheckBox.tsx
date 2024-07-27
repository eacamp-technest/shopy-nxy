import React, {useState} from 'react';
import {SvgImage} from './SvgImage';
import {ImageResources} from 'assets/VectorResources.g';

export const CheckBox: React.FC = () => {
  const [pressCheckBox, setPressCheckBox] = useState<boolean>(false);
  return (
    <SvgImage
      isPressable
      onPress={() => setPressCheckBox(!pressCheckBox)}
      source={
        pressCheckBox
          ? ImageResources.checkBoxBlue
          : ImageResources.checkBoxWhite
      }
    />
  );
};
