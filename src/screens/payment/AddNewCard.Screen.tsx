import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from 'theme/colors';
import {Input} from 'components/Input';
import {normalize} from 'theme/metrics';
import {Button} from 'components/Button';
import {NavBar} from 'components/NavBar';
import {CommonStyles} from 'theme/commonStyles';
import {useNavigation} from '@react-navigation/native';
import {ImageResources} from 'assets/VectorResources.g';
import {SceneRendererProps} from 'react-native-tab-view';
import {SafeMainProvider} from 'containers/SafeMainProvider';

export const AddNewCardScreen: React.FC<SceneRendererProps> = () => {
  const {goBack} = useNavigation();

  return (
    <SafeMainProvider>
      <ScrollView
        scrollEnabled={false}
        style={CommonStyles.flex}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={CommonStyles.flex}>
        <NavBar
          leftColor={colors.ink.base}
          textRight={'Skip'}
          largeTitle={'ADD NEW CARD'}
          leftOnPress={goBack}
          leftIcon={ImageResources.chevronLeft}
        />
        <View style={styles.inputs}>
          <Input placeholder={'Enter your card number'} label={'Card Number'} />
          <Input
            label={'Cardholder Name'}
            placeholder={'Enter your holder name'}
          />
          <Input placeholder={'MM / YY / CVV'} />
        </View>
        <Button
          type={'primary'}
          text={'Add card'}
          position={'center'}
          onPress={() => console.log('Press')}
        />
      </ScrollView>
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  inputs: {
    gap: normalize('vertical', 24),
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 32),
  },
});
