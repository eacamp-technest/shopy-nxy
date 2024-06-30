import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Tables} from 'components/Tables';
import {TypographyStyles} from 'theme/typography';
import {SceneRendererProps} from 'react-native-tab-view';

export const ALLStoresScreenTab: React.FC<SceneRendererProps> = ({}) => {
  return (
    <View style={styles.root}>
      <View
        style={{
          backgroundColor: '#5EC6EB',
          height: 2,
          width: '50%',
        }}></View>
      <Tables
        content="CATEGORIES"
        contentStyle={TypographyStyles.title3}
        Right={
          <Text onPress={() => console.log('-->')} style={styles.tableRight}>
            See All
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingVertical: normalize('vertical', 8),
  },
  tableRight: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.primary.base,
  },
});
