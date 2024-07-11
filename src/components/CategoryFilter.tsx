import React, {useState} from 'react';
import {
  Text,
  View,
  ViewStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {FlashList} from '@shopify/flash-list';
import {isIos} from 'constants/common.consts';
import {TypographyStyles} from 'theme/typography';

const deviceLineHeight = isIos ? 0 : 20;

interface ICategoryFilter {
  categories?: any;
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

  console.log(categories);

  const handleCategoryButton = (id: number) => setActiveButton(id);

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
      ItemSeparatorComponent={itemSeparatorComponent}
      keyExtractor={(item: any) => item.id.toString()}
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
