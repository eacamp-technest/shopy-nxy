import {
  StyleSheet,
  View,
  Modal as NativeModal,
  Text,
  Image,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';
import React, {
  useState,
  forwardRef,
  useCallback,
  isValidElement,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from 'react';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Button, IButton} from './Button';
import {windowWidth} from 'theme/const.styles';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';

interface IModalButtons extends IButton {}

interface IModal {
  title?: string;
  subTitle?: string | React.ReactNode;
  buttons?: IModalButtons[];
  closeable?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
  imageSize?: 'small' | 'medium' | 'large';
  source?: ImageSourcePropType | undefined;
  modalStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  onClose?: () => void;
}

export interface IModalRefCallbacks {
  open: () => void;
  close: () => void;
  state: boolean;
}

const Modal: ForwardRefRenderFunction<IModalRefCallbacks, IModal> = (
  props,
  ref,
) => {
  const {
    children,
    closeable,
    modalStyle,
    wrapperStyle,
    onClose,
    buttons,
    subTitle,
    imageSize = 'medium',
    source,
    title,
  } = props;

  const [visible, setVisible] = useState<boolean>(false);

  const isElement = isValidElement(subTitle);

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
    state: visible,
  }));

  const closeModal = () => {
    setVisible(false);
    onClose?.();
  };

  const renderButtons = useCallback(
    (buttonContext: IModalButtons, index: number) => {
      return <Button key={index} {...buttonContext} />;
    },
    [],
  );

  const renderSubTitle = () => {
    if (!subTitle) {
      return null;
    }

    if (isElement) {
      return subTitle;
    }
    return <Text style={[styles.subtitle]}>{subTitle}</Text>;
  };

  return (
    <NativeModal
      transparent
      visible={visible}
      animationType="fade"
      statusBarTranslucent
      onDismiss={closeModal}
      onRequestClose={closeModal}>
      <Pressable
        disabled={!closeable}
        onPress={() => (ref as {current: IModalRefCallbacks})?.current?.close()}
        style={[styles.background, modalStyle]}>
        <View
          style={[
            styles.view,
            imageSize === 'large' && styles.main,
            wrapperStyle,
          ]}>
          {source ? (
            <Image
              style={[
                styles.image,
                styles[
                  `${imageSize}Image` as keyof typeof styles
                ] as ImageStyle,
              ]}
              source={source}
            />
          ) : null}
          {title ? (
            <Text
              style={[
                TypographyStyles.title3,
                TypographyStyles.textAlignCenter,
              ]}>
              {title}
            </Text>
          ) : null}
          {renderSubTitle()}
          {buttons?.map(renderButtons)}
          {children}
        </View>
      </Pressable>
    </NativeModal>
  );
};
export default forwardRef(Modal);

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.modal,
    ...CommonStyles.flexAlignJustifyCenter,
  } as ViewStyle,
  main: {
    paddingTop: 0,
  } as ViewStyle,
  view: {
    padding: 24,
    borderRadius: 16,
    width: windowWidth - 48,
    backgroundColor: colors.white,
  } as ViewStyle,
  subtitle: {
    ...TypographyStyles.RegularNormalSemiBold,
    textAlign: 'center',
    color: colors.ink.lighter,
  } as TextStyle,
  image: {
    borderRadius: 16,
    alignSelf: 'center',
  } as ImageStyle,
  smallImage: {
    width: normalize('width', 64),
    height: normalize('height', 64),
  } as ImageStyle,
  mediumImage: {
    width: normalize('width', 120),
    height: normalize('height', 120),
  } as ImageStyle,
  largeImage: {
    overflow: 'hidden',
    width: windowWidth - 48,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: normalize('height', 186),
  } as ImageStyle,
});
