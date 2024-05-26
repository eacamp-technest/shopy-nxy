import React from 'react';
import {View, Text} from 'react-native';
import {SafeTopProvider} from 'containers/SafeTopProvider';

export const SearchScreen: React.FC = () => {
  return (
    <SafeTopProvider content={'dark-content'}>
      <View>
        <Text>SearchScreen</Text>
      </View>
    </SafeTopProvider>
  );
};
