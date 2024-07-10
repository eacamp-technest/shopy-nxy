import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ViewStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {ENDPOINTS} from 'services/Endpoints';
import {FlashList} from '@shopify/flash-list';
import {isIos} from 'constants/common.consts';
import {TypographyStyles} from 'theme/typography';

const deviceLineHeight = isIos ? 0 : 20;

interface ICategoryFilter {
  titleColor?: StyleProp<TextStyle>;
  backgroundColor?: StyleProp<ViewStyle>;
}

const itemSeparatorComponent = () => {
  return <View style={styles.itemSeparatorComponent} />;
};

export const CategoryFilter: React.FC<ICategoryFilter> = ({
  titleColor,
  backgroundColor,
}) => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const [categories, setCategories] = useState<any>({});

  const handleCategoryButton = (id: number) => setActiveButton(id);

  useEffect(() => {
    const onSubmit = async () => {
      const res = await axios({
        method: 'GET',
        url: ENDPOINTS.products.categories,
      });

      if (res.status === 200) {
        const categoriesWithId = res.data.map((item: any, index: number) => ({
          ...item,
          id: item.id ?? index,
        }));
        setCategories(categoriesWithId);
      } else {
        console.log('Error');
      }
    };
    onSubmit();
  }, []);

  const renderCategory = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => handleCategoryButton(item.id)}
        style={[
          styles.main,
          backgroundColor,
          activeButton === item.id ? styles.mainPress : null,
        ]}>
        <Text
          style={[
            styles.title,
            titleColor,
            activeButton === item.id ? styles.titlePress : null,
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlashList
      horizontal
      data={categories}
      estimatedItemSize={30}
      extraData={activeButton}
      renderItem={renderCategory}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={itemSeparatorComponent}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

const styles = StyleSheet.create({
  main: {
    borderRadius: 100,
  },
  title: {
    paddingVertical: normalize('vertical', 8),
    paddingHorizontal: normalize('horizontal', 16),
    ...TypographyStyles.RegularNoneRegular,
    color: colors.ink.base,
    lineHeight: deviceLineHeight,
  },
  mainPress: {
    backgroundColor: colors.primary.base,
  },
  titlePress: {
    color: colors.white,
  },
  itemSeparatorComponent: {
    width: normalize('width', 8),
  },
  contentContainerStyle: {
    paddingRight: normalize('horizontal', 15),
  },
});
