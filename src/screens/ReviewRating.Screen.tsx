import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {review} from 'mock/review';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {FlashList} from '@shopify/flash-list';
import {IReview, Review} from 'components/Review';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const ItemSeparatorComponent = () => {
  return <View style={styles.flashVertical} />;
};

export const ReviewRatingScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.reviewRating>
> = ({navigation}) => {
  const renderReview = ({index, item}: {index: number; item: IReview}) => {
    return (
      <Review
        key={index}
        name={item.name}
        date={item.date}
        image={item.image}
        surname={item.surname}
        description={item.description}
      />
    );
  };

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
          <FlashList
            data={review}
            scrollEnabled={false}
            estimatedItemSize={200}
            renderItem={renderReview}
            ItemSeparatorComponent={ItemSeparatorComponent}
          />
        </ScrollView>
      </View>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: normalize('horizontal', 24),
  },
  scroll: {
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 50),
  },
  flashVertical: {
    height: normalize('height', 24),
  },
});
