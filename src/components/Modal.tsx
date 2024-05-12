import React from 'react';
import {Modal, StyleSheet, View, ViewStyle} from 'react-native';
import {Button} from './Button';
import {TextLink} from './TextLink';
import {colors} from 'theme/colors';
import {TypographyStyles} from 'theme/typography';
import {normalize} from 'theme/metrics';
import {modal} from 'constants/textLink';
import {CommonStyles} from 'theme/commonStyles';

// ! Interface

interface IModal {
  modalVisible?: boolean;
  setModalVisible: (visible: boolean) => void;
}

export const ModalWindow: React.FC<IModal> = ({
  modalVisible,
  setModalVisible,
}) => {
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
                position={'center'}
                type={'primary'}
                text={'Agree and continue'}
              />
              <Button
                onPress={() => setModalVisible(!modalVisible)}
                size={'block'}
                position={'center'}
                type={'transparent'}
                text={'Disagree and close'}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// ! Styles

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
