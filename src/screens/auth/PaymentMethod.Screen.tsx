import {SafeMainProvider} from 'containers/SafeMainProvider';
import React from 'react';
import {View, Text} from 'react-native';

export const PaymentMethodScreen = () => {
  return (
    <SafeMainProvider>
      <View>
        <Text>PaymentMethod</Text>
      </View>
    </SafeMainProvider>
  );
};
