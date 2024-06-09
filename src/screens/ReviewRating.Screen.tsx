import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Review} from 'components/Review';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ReviewRatingScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.reviewRating>
> = ({navigation}) => {
  return (
    <SafeTopProvider>
      <View style={styles.root}>
        <NavBar
          title={'PRODUCT REVIEW'}
          leftColor={colors.ink.base}
          rightColor={colors.ink.base}
          rightIcon={ImageResources.sliders}
          leftIcon={ImageResources.chevronLeft}
          leftOnPress={() => navigation.goBack()}
        />
        <Review />
      </View>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: normalize('horizontal', 24),
  },
});
