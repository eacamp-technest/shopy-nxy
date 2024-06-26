import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  FlatList,
} from 'react-native';
import {StackRoutes} from 'router/routes';
import {NavigationParamList} from 'types/navigation.types';
import {searchScreenOptions} from 'configs/navigation.configs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const SearchScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.search>
> = ({navigation, route}) => {
  const {onItemPress, items, ...rest} = route.params;

  const [data, setData] = useState<string[]>(items ?? []);

  const onChangeText = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      const text = event.nativeEvent.text;
      const filtered = items?.filter(item => {
        return item.toLowerCase().includes(text.toLocaleLowerCase());
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
          <Text>{item}</Text>
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
    <FlatList
      data={data}
      renderItem={renderItem}
      contentInsetAdjustmentBehavior={'automatic'}
    />
  );
};
