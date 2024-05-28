import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from 'theme/colors';
import {Routes} from 'router/routes';
import {useForm} from 'react-hook-form';
import {normalize} from 'theme/metrics';
import {Button} from 'components/Button';
import {NavBar} from 'components/NavBar';
import {FormRules} from 'constants/formRules';
import {useUserStoreActions} from 'store/user';
import {CommonStyles} from 'theme/commonStyles';
import {ICardInputFrom} from 'types/card.types';
import DatePicker from 'react-native-date-picker';
import {useNavigation} from '@react-navigation/native';
import {ImageResources} from 'assets/VectorResources.g';
import {SceneRendererProps} from 'react-native-tab-view';
import {InputControlled} from 'components/InputControlled';
import {SafeMainProvider} from 'containers/SafeMainProvider';

interface IInputForm {
  cardNumber?: string;
  holder?: string;
  cvv?: string;
  expiration?: string;
}

export const AddNewCardScreen: React.FC<SceneRendererProps> = ({jumpTo}) => {
  const {goBack} = useNavigation();

  const [picker, setPicker] = useState<boolean>(false);
  const {addCard} = useUserStoreActions();

  const onSubmit = (data: ICardInputFrom) => {
    data.id = String(Math.random() * 10000).slice(0, 4);
    addCard(data);
    jumpTo(Routes.paymentMethod);
    reset();
  };

  const onDateConfirm = (date: Date) => {
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const year = String(date.getFullYear()).slice(2);

    setValue('expiration', `${month} / ${year}`);
    setPicker(false);
  };

  const {
    reset,
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm<IInputForm>({
    defaultValues: __DEV__
      ? {
          cardNumber: '2322 1254 5675 6536',
          holder: 'Nadir Musayev',
          cvv: '354',
          expiration: '12 / 21',
        }
      : {},
  });

  return (
    <SafeMainProvider>
      <NavBar
        leftColor={colors.ink.base}
        textRight={'Skip'}
        largeTitle={'ADD NEW CARD'}
        leftOnPress={goBack}
        leftIcon={ImageResources.chevronLeft}
      />
      <ScrollView
        style={CommonStyles.flex}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={CommonStyles.flex}>
        <View style={styles.inputs}>
          <InputControlled
            maxLength={19}
            control={control}
            name="cardNumber"
            label="Card Number"
            keyboardType="number-pad"
            manipulator={'cardNumber'}
            rules={FormRules.bankCard}
            placeholder="Enter your card number"
            errorMessage={errors.cardNumber?.message}
          />
          <InputControlled
            name="holder"
            control={control}
            label="Cardholder Name"
            rules={FormRules.fullName}
            placeholder="Enter your holder name"
            errorMessage={errors.holder?.message}
          />
          <InputControlled
            name="cvv"
            label="CVV"
            maxLength={3}
            control={control}
            rules={FormRules.cvv}
            keyboardType="number-pad"
            placeholder="Enter your CVV"
            errorMessage={errors.cvv?.message}
          />
          <InputControlled
            name="expiration"
            control={control}
            placeholder="MM / YY"
            label="Expiration Date"
            onInputPress={() => setPicker(true)}
            errorMessage={errors.expiration?.message}
          />
        </View>
        <Button
          type={'primary'}
          text={'Add card'}
          position={'center'}
          onPress={handleSubmit(onSubmit)}
        />
        <DatePicker
          modal={true}
          open={picker}
          date={new Date()}
          mode="date"
          theme="light"
          onCancel={() => setPicker(false)}
          title={'Select Expiration Date'}
          onConfirm={onDateConfirm}
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
