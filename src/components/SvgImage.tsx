import React, {memo} from 'react';
import {SvgProps} from 'react-native-svg';
import {VectorResources} from 'assets/VectorResources';
import {normalize} from 'theme/metrics';

type VectorResourcesType = typeof VectorResources;
export interface Resources extends VectorResourcesType {
  default: any;
}
export interface SvgImageProps extends SvgProps {
  source: Resources;
}

export const SvgImage: React.FC<SvgImageProps> = memo(
  ({source, children, ...props}) => {
    if (!source?.default) {
      return null;
    }

    if (props.width) {
      props.width = normalize('width', Number(props.width));
    }

    if (props.height) {
      props.height = normalize('width', Number(props.height));
    }

    return React.createElement(source.default, props, children);
  },
);
