import React, {useState} from 'react';
import {
  Text,
  View,
  ViewStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {isIos} from 'constants/common.consts';
import {TypographyStyles} from 'theme/typography';
import {useCategoryStoreActions} from 'store/category-all-store';

const deviceLineHeight = isIos ? 0 : 20;

interface ICategoryFilter {
  categories?: any;
  activeButton?: number;
  activeName?: string;
  titleColor?: StyleProp<TextStyle>;
  backgroundColor?: StyleProp<ViewStyle>;
}

const itemSeparatorComponent = () => {
  return <View style={styles.itemSeparatorComponent} />;
};

export const CategoryFilter: React.FC<ICategoryFilter> = ({
  titleColor,
  backgroundColor,
  categories,
}) => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const {addCategory} = useCategoryStoreActions();

  const handleCategoryButton = (id: number, name: string) => {
    addCategory(name);
    setActiveButton(id);
  };

  const renderCategory = ({item, index}: any) => {
    return (
      <TouchableOpacity
        onPress={() => handleCategoryButton(index, item)}
        style={[
          styles.main,
          backgroundColor,
          activeButton === index ? styles.mainPress : null,
        ]}>
        <Text
          style={[
            styles.title,
            titleColor,
            activeButton === index ? styles.titlePress : null,
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      data={categories}
      // estimatedItemSize={30}
      extraData={activeButton}
      renderItem={renderCategory}
      showsHorizontalScrollIndicator={false}
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
