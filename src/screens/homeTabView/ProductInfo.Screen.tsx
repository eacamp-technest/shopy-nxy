import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from 'theme/colors';
import {SceneRendererProps} from 'react-native-tab-view';
import {useProductInfoStore} from 'store/product-info/productInfo.store';

export const ProductInfosScreenTab: React.FC<SceneRendererProps> = ({}) => {
  const {data} = useProductInfoStore();

  const renderProduct = ({item, index}: any) => {
    return (
      <View style={styles.root}>
        <Text>{item.id}</Text>
        <Text>{item.category}</Text>
        <Text>{item.description}</Text>
        <Text>{item.rating}</Text>
      </View>
    );
  };

  return <FlatList data={data} renderItem={renderProduct} />;
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
    color: colors.bdazzledBlue.darkest,
  },
});
