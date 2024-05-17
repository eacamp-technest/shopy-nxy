import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  TextStyle,
  Pressable,
  Keyboard,
  ViewStyle,
} from 'react-native';
import {colors} from 'theme/colors';
import {Routes} from 'router/routes';
import {normalize} from 'theme/metrics';
import {Button} from 'components/Button';
import {NavBar} from 'components/NavBar';
import {TextLink} from 'components/TextLink';
import {CommonStyles} from 'theme/commonStyles';
import {OTPCodeField} from 'components/OTPInputField';
import {modal, verification} from 'constants/textLink';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import Modal, {IModalRefCallbacks} from 'components/Modal';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IButton} from 'components/Button';

export const VerificationScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.verification>
> = ({navigation}) => {
  const [code, setCode] = React.useState<string>('');

  const modalRef = useRef<IModalRefCallbacks>(null);

  const buttonsArray: IButton[] = [
    {
      text: 'Agree and continue',
      type: 'primary',
      position: 'center',
      onPress: () => {
        modalRef?.current?.close();
        navigation.navigate(Routes.paymentMethod);
      },
    },
    {
      text: 'Disagree and close',
      type: 'transparent',
      position: 'center',
      onPress: () => modalRef?.current?.close(),
    },
  ];

  return (
    <SafeMainProvider>
      <Pressable style={CommonStyles.flex} onPress={Keyboard.dismiss}>
        <NavBar
          leftColor={colors.ink.base}
          largeTitle={'ENTER SMS CODE'}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
        />
        <OTPCodeField
          setCode={setCode}
          code={code}
          style={styles.otp}
          triggerOnFinish={Keyboard.dismiss}
          length={4}
        />
        <View style={styles.resentText}>
          <TextLink
            center
            content={verification.content}
            highlighted={verification.highlighted}
            fontColor={colors.primary.base}
          />
        </View>
        <Button
          text={'Continue'}
          type={'primary'}
          position={'center'}
          disabled={code.length !== 4}
          onPress={() => modalRef?.current?.open()}
        />
        <View>
          <Modal
            subTitle={
              <TextLink
                center
                content={modal.content}
                fontColor={colors.primary.base}
                highlighted={modal.highlighted}
              />
            }
            closeable
            buttons={buttonsArray}
            ref={modalRef}
            wrapperStyle={styles.wrapper}
          />
        </View>
      </Pressable>
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  resentText: {
    paddingVertical: normalize('vertical', 32),
  } as TextStyle,
  otp: {
    paddingHorizontal: 32,
    marginTop: 16,
    marginBottom: 32,
  } as ViewStyle,
  wrapper: {
    gap: normalize('vertical', 24),
  },
});
