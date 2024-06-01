import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'theme/colors';
import {Routes} from 'router/routes';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {Button} from 'components/Button';
import {useUserStore} from 'store/user/user.store';
import {BankCard} from 'components/specific/BankCard';
import {ImageResources} from 'assets/VectorResources.g';
import {SceneRendererProps} from 'react-native-tab-view';
import {SafeMainProvider} from 'containers/SafeMainProvider';

export const YourCardScreen: React.FC<SceneRendererProps> = ({jumpTo}) => {
  const {
    cards,
    selectedCard,
    actions: {selectCard},
  } = useUserStore(state => state);

  const onLeftPress = () => {
    jumpTo(Routes.paymentMethod);
    selectCard(null);
  };

  return (
    <SafeMainProvider>
      <NavBar
        title={'YOUR CARD'}
        leftColor={colors.ink.base}
        leftOnPress={onLeftPress}
        leftIcon={ImageResources.chevronLeft}
      />
      <View style={styles.card}>
        <BankCard
          cardNumber={selectedCard?.cardNumber}
          holder={selectedCard?.holder}
          expiration={selectedCard?.expiration}
        />
      </View>
      <Button
        text={'Add new card'}
        type={'outlined'}
        position={'center'}
        disabled={cards.length >= 2}
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
