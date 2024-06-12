import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackRoutes} from 'router/routes';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const InStoresScreenTab: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.inStores>
> = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>InStore</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
});
