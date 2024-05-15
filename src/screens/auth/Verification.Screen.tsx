import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextStyle,
  Pressable,
  Keyboard,
  ViewStyle,
} from 'react-native';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {colors} from 'theme/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';
import {Button} from 'components/Button';
import {normalize} from 'theme/metrics';
import {TextLink} from 'components/TextLink';
import {ModalWindow} from 'components/Modal';
import {verification} from 'constants/textLink';
import {OTPCodeField} from 'components/OTPInputField';
import {CommonStyles} from 'theme/commonStyles';

export const VerificationScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.verification>
> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [code, setCode] = React.useState<string>('');

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
          onPress={() => setModalVisible(true)}
        />
        <View>
          <ModalWindow
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
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
});
