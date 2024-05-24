import React from 'react';
import {View, Text} from 'react-native';
import {SafeTopProvider} from 'containers/SafeTopProvider';

export const FavoriteScreen: React.FC = () => {
  return (
    <SafeTopProvider>
      <View>
        <Text>FavoriteScreen</Text>
      </View>
    </SafeTopProvider>
  );
};
