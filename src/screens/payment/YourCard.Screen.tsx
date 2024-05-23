import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'theme/colors';
import {Routes} from 'router/routes';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {Button} from 'components/Button';
import {BankCard} from 'components/specific/BankCard';
import {ImageResources} from 'assets/VectorResources.g';
import {SceneRendererProps} from 'react-native-tab-view';
import {SafeMainProvider} from 'containers/SafeMainProvider';

export const YourCardScreen: React.FC<SceneRendererProps> = ({jumpTo}) => {
  return (
    <SafeMainProvider>
      <NavBar
        title={'YOUR CARD'}
        leftColor={colors.ink.base}
        leftOnPress={() => jumpTo(Routes.paymentMethod)}
        leftIcon={ImageResources.chevronLeft}
      />
      <View style={styles.card}>
        <BankCard onPress={() => console.log('press')} />
      </View>
      <Button
        text={'Add new card'}
        type={'outlined'}
        position={'center'}
        onPress={() => jumpTo(Routes.addNewCard)}
      />
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: normalize('vertical', 24),
    marginBottom: normalize('vertical', 32),
  },
});
