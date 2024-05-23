import {SafeMainProvider} from 'containers/SafeMainProvider';
import React from 'react';
import {View, Text} from 'react-native';

export const NotificationScreen: React.FC = () => {
  return (
    <SafeMainProvider>
      <View>
        <Text>NotificationScreen</Text>
      </View>
    </SafeMainProvider>
  );
};
