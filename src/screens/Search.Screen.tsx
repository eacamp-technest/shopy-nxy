import React, {useCallback, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {StackRoutes} from 'router/routes';
import {FlashList} from '@shopify/flash-list';
import {NavigationParamList} from 'types/navigation.types';
import {searchScreenOptions} from 'configs/navigation.configs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const SearchScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.search>
> = ({navigation, route}) => {
  const {onItemPress, items, ...rest} = route.params;

  const onChangeText = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      console.log(event.nativeEvent.text);
    },
    [],
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
    <FlashList
      data={items || []}
      estimatedItemSize={200}
      renderItem={renderItem}
      contentInsetAdjustmentBehavior={'automatic'}
    />
  );
};
