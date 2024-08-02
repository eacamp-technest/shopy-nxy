import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {normalize} from 'theme/metrics';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import {colorsHorizontal, colorsVertical} from 'theme/colors';
import {useProductDetailActions} from 'store/product-detail';

type TPosition = 'vertical' | 'horizontal';

interface IColors {
  title?: string;
  position: TPosition;
}

export const PartialsColor: React.FC<IColors> = ({
  title,
  position = 'vertical',
}) => {
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [sliderColor, setSliderColor] = useState<string>('');

  const {handleColor, handleSliderColor} = useProductDetailActions();

  const data = position === 'horizontal' ? colorsHorizontal : colorsVertical;

  const renderItem = ({item}: {item: string}) => {
    return (
      <TouchableOpacity
        style={[
          styles.colorBox,
          {backgroundColor: item},
          selectedColor === item || sliderColor === item
            ? styles.selected
            : null,
        ]}
        onPress={() => changeColor(item)}
      />
    );
  };

  const changeColor = (item: any) => {
    if (position === 'horizontal') {
      setSelectedColor(item);
      handleColor(item);
      return;
    }
    setSliderColor(item);
    handleSliderColor(item);
  };

  return (
    <View style={styles[position]}>
      <Text style={TypographyStyles.title3}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        scrollEnabled={false}
        keyExtractor={item => item}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          position === 'vertical' && CommonStyles.flexJustifyCenter,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vertical: {
    gap: normalize('vertical', 16),
  },
  colorBox: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selected: {
    borderWidth: 1,
    borderColor: '#000',
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: normalize('horizontal', 16),
  },
});
