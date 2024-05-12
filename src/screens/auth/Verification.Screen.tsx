import React, {useState} from 'react';
import {View, StyleSheet, TextStyle, Pressable, Keyboard} from 'react-native';
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
import {OTPInputField} from 'components/OTPInputField';
import {CommonStyles} from 'theme/commonStyles';

export const VerificationScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.verification>
> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [disabled, setDisabled] = useState<boolean>(true);

  return (
    <SafeMainProvider>
      <Pressable style={CommonStyles.flex} onPress={Keyboard.dismiss}>
        <NavBar
          leftIcon={ImageResources.chevronLeft}
          leftColor={colors.ink.base}
          largeTitle={'ENTER SMS CODE'}
          leftOnPress={navigation.goBack}
        />
        <OTPInputField setDisabled={setDisabled} length={4} />
        <View style={styles.resentText}>
          <TextLink
            center
            content={verification.content}
            highlighted={verification.highlighted}
          />
        </View>
        <Button
          disabled={disabled}
          text={'Continue'}
          position={'center'}
          type={'primary'}
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

// ! Styles

const styles = StyleSheet.create({
  resentText: {
    paddingVertical: normalize('vertical', 32),
  } as TextStyle,
});
