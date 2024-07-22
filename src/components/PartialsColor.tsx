import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {normalize} from 'theme/metrics';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import {colorsHorizontal, colorsVertical} from 'theme/colors';

type TPosition = 'vertical' | 'horizontal';

interface IColors {
  title?: string;
  position: TPosition;
}

export const PartialsColor: React.FC<IColors> = ({
  title,
  position = 'vertical',
}) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const data = position === 'horizontal' ? colorsHorizontal : colorsVertical;

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.colorBox,
          {backgroundColor: item},
          selectedColor === item ? styles.selected : null,
        ]}
        onPress={() => setSelectedColor(item)}
      />
    );
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
          position === 'vertical' ? CommonStyles.flexJustifyCenter : null,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    // backgroundColor: 'red',
    gap: 85,
    ...CommonStyles.alignCenterJustifyBetweenRow,
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
    borderColor: '#000',
    borderWidth: 1,
  },
  contentContainerStyle: {
    gap: 16,
    flex: 1,
    // backgroundColor: 'red',
  },
});
