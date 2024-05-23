import React from 'react';
import {View, Text} from 'react-native';
import {SafeMainProvider} from 'containers/SafeMainProvider';

export const SearchScreen: React.FC = () => {
  return (
    <SafeMainProvider>
      <View>
        <Text>SearchScreen</Text>
      </View>
    </SafeMainProvider>
  );
};
