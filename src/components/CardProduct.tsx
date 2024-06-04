import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type TTypeCard = 'list' | 'add' | 'save';

interface ICardProduct {
  type: TTypeCard;
}

export const CardProduct: React.FC<ICardProduct> = () => {
  return (
    <View>
      <Text>CardProduct</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
