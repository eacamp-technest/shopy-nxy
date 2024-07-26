import React, {Fragment} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import {SvgImage, SvgImageProps} from './SvgImage';

interface IAddPhoto {
  title?: string;
  image?: ImageSourcePropType | any;
  icon?: SvgImageProps;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const AddPhoto: React.FC<IAddPhoto> = ({
  title,
  icon,
  onPress,
  image,
  disabled,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={[styles.root, !title ? styles.imageContainer : null, style]}>
      {title ? (
        <Fragment>
          <View style={styles.camera}>
            <SvgImage source={icon} />
          </View>
          <Text
            style={
              (TypographyStyles.TinyNormalRegular, {color: colors.inkBase})
            }>
            {title}
          </Text>
        </Fragment>
      ) : (
        <Image
          style={styles.image}
          source={typeof image === 'string' ? {uri: image} : image}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: normalize('vertical', 8),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.blue.base,
    width: normalize('width', 100),
    height: normalize('height', 104),
    ...CommonStyles.alignJustifyCenter,
    paddingVertical: normalize('vertical', 16),
  },
  imageContainer: {
    borderWidth: 0,
  },
  image: {
    width: normalize('width', 100),
    height: normalize('height', 104),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.blue.base,
  },
  camera: {
    padding: 12,
    borderRadius: 100,
    backgroundColor: colors.blue.lightest,
  },
});
