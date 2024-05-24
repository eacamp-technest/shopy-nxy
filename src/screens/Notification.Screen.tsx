import React from 'react';
import {View, Text} from 'react-native';
import {SafeTopProvider} from 'containers/SafeTopProvider';

export const NotificationScreen: React.FC = () => {
  return (
    <SafeTopProvider>
      <View>
        <Text>NotificationScreen</Text>
      </View>
    </SafeTopProvider>
  );
};
