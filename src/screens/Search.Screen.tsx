import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {normalize} from 'theme/metrics';
import {StackRoutes} from 'router/routes';
import {FlashList} from '@shopify/flash-list';
import {NavigationParamList} from 'types/navigation.types';
import {searchScreenOptions} from 'configs/navigation.configs';
import {CardProduct, ICardProduct} from 'components/CardProduct';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const ItemSeparatorComponent = () => {
  return <View style={styles.flashVertical} />;
};

export const SearchScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.search>
> = ({navigation, route}) => {
  const {onItemPress, items, ...rest} = route.params;
  const [data, setData] = useState<ICardProduct[]>(items ?? []);

  const onChangeText = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      const text = event.nativeEvent.text.toLowerCase();

      const filtered = items?.filter(item => {
        return item.title.toLowerCase().includes(text);
      });
      setData(filtered ?? []);
    },
    [items],
  );

  const renderItem = useCallback(
    ({item}: {item: any}) => {
      return (
        <TouchableOpacity
          onPress={() => {
            onItemPress?.(item);
            navigation.pop();
          }}>
          <CardProduct
            key={item.id}
            type={'list'}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        </TouchableOpacity>
      );
    },
    [onItemPress, navigation],
  );

  useEffect(() => {
    navigation.setOptions({
      ...rest,
      ...searchScreenOptions,
      headerSearchBarOptions: {
        ...searchScreenOptions.headerSearchBarOptions,
        onChangeText,
      },
    });
  }, [navigation, rest, onChangeText]);

  return (
    <View style={[styles.root]}>
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior={'automatic'}
        ItemSeparatorComponent={ItemSeparatorComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: normalize('horizontal', 24),
  },
  contentContainerStyle: {
    paddingVertical: normalize('vertical', 20),
  },
  flashVertical: {
    height: normalize('height', 24),
  },
});
