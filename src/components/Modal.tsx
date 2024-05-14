import React from 'react';
import {Modal, StyleSheet, View, ViewStyle} from 'react-native';
import {Button} from './Button';
import {TextLink} from './TextLink';
import {colors} from 'theme/colors';
import {TypographyStyles} from 'theme/typography';
import {normalize} from 'theme/metrics';
import {modal} from 'constants/textLink';
import {CommonStyles} from 'theme/commonStyles';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'router/routes';

interface IModal {
  modalVisible?: boolean;
  onPress?: () => void;
  setModalVisible: (visible: boolean) => void;
}

export const ModalWindow: React.FC<IModal> = ({
  modalVisible,
  setModalVisible,
}) => {
  const {navigate} = useNavigation();

  const handleNavigate = () => {
    setModalVisible(false);
    navigate(Routes.paymentMethod as never);
  };

  return (
    <View style={styles.root}>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.root}>
          <View style={styles.modal}>
            <TextLink
              center
              content={modal.content}
              highlighted={modal.highlighted}
              style={TypographyStyles.RegularNormalRegular}
            />
            <View style={styles.buttons}>
              <Button
                type={'primary'}
                position={'center'}
                text={'Agree and continue'}
                onPress={handleNavigate}
              />
              <Button
                size={'block'}
                position={'center'}
                type={'transparent'}
                text={'Disagree and close'}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.modal,
    ...CommonStyles.flexJustifyCenter,
  } as ViewStyle,
  modal: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 24,
    backgroundColor: colors.white,
    marginHorizontal: normalize('horizontal', 24),
  } as ViewStyle,
  buttons: {
    gap: normalize('vertical', 12),
    paddingTop: normalize('vertical', 24),
  } as ViewStyle,
});
