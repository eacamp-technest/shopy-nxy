import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  ScrollView,
} from 'react-native';
import {colors} from 'theme/colors';
import {Routes} from 'router/routes';
import {Table} from 'components/Table';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {Button} from 'components/Button';
import {TextLink} from 'components/TextLink';
import {ICardInputFrom} from 'types/card.types';
import {methodPayment} from 'constants/textLink';
import {TypographyStyles} from 'theme/typography';
import {useUserStore} from 'store/user/user.store';
import {useNavigation} from '@react-navigation/native';
import {ImageResources} from 'assets/VectorResources.g';
import {SceneRendererProps} from 'react-native-tab-view';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {useToast} from 'store/toast';

export const PaymentMethodScreen: React.FC<SceneRendererProps> = ({jumpTo}) => {
  const {goBack} = useNavigation();

  const {
    cards,
    actions: {selectCard},
  } = useUserStore(state => state);

  const showToast = useToast();

  const renderCards = (data: ICardInputFrom) => {
    const onPress = () => {
      selectCard(data.id);
      jumpTo(Routes.yourCard);
    };

    return (
      <Table
        type={'bank'}
        key={data.id}
        onPress={onPress}
        isPressable={true}
        text={`* * * * * * * * * * * * ${data.cardNumber.slice(-4)}`}
      />
    );
  };
  const onAddNewMethod = () => {
    if (cards.length >= 2) {
      showToast('error', 'You can only store up to 3 cards. ');

      return;
    }

    jumpTo(Routes.addNewCard);
  };
  return (
    <SafeTopProvider>
      <NavBar
        leftColor={colors.ink.base}
        leftOnPress={goBack}
        textRight={'Skip'}
        leftIcon={ImageResources.chevronLeft}
        largeTitle={'PAYMENT METHODS'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <View style={styles.textLink}>
            <Text style={styles.text}>STORED CARD</Text>
            <TextLink
              content={methodPayment.content}
              fontColor={colors.primary.base}
              highlighted={methodPayment.highlighted}
            />
          </View>
          <View style={styles.buttons}>
            {cards.map(renderCards)}
            <Table
              type={'add'}
              isPressable={true}
              text={'Add another card'}
              onPress={onAddNewMethod}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>STORED CARD</Text>
            <Text style={styles.textError}>
              You don’t have a connected bank account.
            </Text>
          </View>
        </View>
        <Button
          type={'primary'}
          position={'center'}
          text={'Connect a bank account'}
          onPress={() => console.log('Connect a bank')}
        />
      </ScrollView>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    gap: normalize('vertical', 32),
  },
  textLink: {
    gap: normalize('vertical', 12),
    paddingTop: normalize('vertical', 24),
  } as TextStyle,
  buttons: {
    gap: normalize('vertical', 16),
  } as ViewStyle,
  text: {
    ...TypographyStyles.RegularNoneSemibold,
    color: colors.ink.darkest,
  } as TextStyle,
  textContainer: {
    gap: normalize('vertical', 12),
    paddingBottom: normalize('vertical', 24),
  } as ViewStyle,
  textError: {
    ...TypographyStyles.RegularNormalRegular,
    color: colors.ink.lighter,
  } as TextStyle,
});
