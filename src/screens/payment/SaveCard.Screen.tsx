import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {colors} from 'theme/colors';
import {Input} from 'components/Input';
import {normalize} from 'theme/metrics';
import {Button} from 'components/Button';
import {NavBar} from 'components/NavBar';
import {CommonStyles} from 'theme/commonStyles';
import {BankCard} from 'components/specific/BankCard';
import {useNavigation} from '@react-navigation/native';
import {ImageResources} from 'assets/VectorResources.g';
import {SceneRendererProps} from 'react-native-tab-view';
import {SafeTopProvider} from 'containers/SafeTopProvider';

export const SaveCardScreen: React.FC<SceneRendererProps> = ({}) => {
  const {goBack} = useNavigation();

  return (
    <SafeTopProvider>
      <ScrollView
        scrollEnabled={false}
        style={CommonStyles.flex}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={CommonStyles.flex}>
        <NavBar
          title={'YOUR CARD'}
          leftColor={colors.ink.base}
          leftOnPress={goBack}
          leftIcon={ImageResources.chevronLeft}
        />
        <View style={styles.card}>
          <BankCard
            disabled={true}
            expiration={'12/24'}
            holder={'Nadir Musayev'}
            cardNumber={'4532 1245 8765 2156'}
          />
        </View>
        <View style={styles.inputs}>
          <Input placeholder={'4532 1245 8765 2156'} label={'Card Number'} />
          <Input placeholder={'Brooklyn Simmons'} label={'Cardholder Name'} />
          <Input placeholder={'12 / 24  /  088'} />
        </View>
        <Button
          text={'Save'}
          type={'primary'}
          position={'center'}
          onPress={() => console.log('SAVE')}
        />
      </ScrollView>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  inputs: {
    gap: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 118),
  },
  card: {
    marginTop: normalize('vertical', 24),
    marginBottom: normalize('vertical', 32),
  },
});
