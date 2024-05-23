import {SafeMainProvider} from 'containers/SafeMainProvider';
import React from 'react';
import {View, Text} from 'react-native';

export const FavoriteScreen: React.FC = () => {
  return (
    <SafeMainProvider>
      <View>
        <Text>FavoriteScreen</Text>
      </View>
    </SafeMainProvider>
  );
};
