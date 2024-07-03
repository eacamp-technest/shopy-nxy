import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Tables} from 'components/Tables';
import {Button} from 'components/Button';
import {TypographyStyles} from 'theme/typography';
import {fetch} from '@react-native-community/netinfo';
import {SceneRendererProps} from 'react-native-tab-view';

export const ALLStoresScreenTab: React.FC<SceneRendererProps> = ({}) => {
  const handleOnPress = async () => {
    const connection = await fetch();
    if (connection.type !== 'wifi' && connection.type === 'cellular') {
      Alert.alert('Warning', 'You are using cellular data. Continue?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('install something'),
        },
      ]);
    }
  };

  return (
    <View style={styles.root}>
      <Tables
        content="CATEGORIES"
        contentStyle={TypographyStyles.title3}
        Right={
          <Text onPress={() => console.log('-->')} style={styles.tableRight}>
            See All
          </Text>
        }
      />
      <View style={{paddingHorizontal: 24}}>
        <Button onPress={handleOnPress} position={'center'} text={'Download'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: normalize('vertical', 8),
  },
  tableRight: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.primary.base,
  },
});
