import React, {Fragment, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {review} from 'mock/review';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {Button} from 'components/Button';
import {StackRoutes} from 'router/routes';
import {FlashList} from '@shopify/flash-list';
import {CommonStyles} from 'theme/commonStyles';
import {IReview, Review} from 'components/Review';
import {ImageResources} from 'assets/VectorResources.g';
import {BottomSheetAction} from 'components/BottomSheet';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const ItemSeparatorComponent = () => {
  return <View style={styles.flashVertical} />;
};

export const ReviewRatingScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.reviewRating>
> = ({navigation}) => {
  const [bottomSheet, setBottomSheet] = useState<boolean>(false);

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

  const handleWriteReview = () => {
    setBottomSheet(true);
  };

  return (
    <SafeTopProvider>
      <View style={[styles.root, bottomSheet ? styles.rootHeight : null]}>
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
          contentContainerStyle={[
            styles.scroll,
            bottomSheet ? styles.scrollPaddingBottom : null,
          ]}>
          <FlashList
            data={review}
            scrollEnabled={false}
            estimatedItemSize={200}
            renderItem={renderReview}
            ItemSeparatorComponent={ItemSeparatorComponent}
          />
        </ScrollView>
        {!bottomSheet ? (
          <View style={styles.buttonContainer}>
            <Button
              onPress={handleWriteReview}
              style={styles.button}
              icon={ImageResources.edit2}
              text={'Write a review'}
            />
          </View>
        ) : null}
      </View>
      <Fragment>
        {bottomSheet ? (
          <View style={CommonStyles.flex}>
            <BottomSheetAction />
          </View>
        ) : null}
      </Fragment>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: normalize('horizontal', 24),
  },
  rootHeight: {
    flex: 0,
    height: 180,
  },
  scroll: {
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 120),
  },
  scrollPaddingBottom: {
    paddingBottom: 0,
  },
  flashVertical: {
    height: normalize('height', 24),
  },
  buttonContainer: {
    left: 0,
    right: 0,
    bottom: 37,
    zIndex: 999,
    position: 'absolute',
    alignItems: 'center',
  },
  button: {
    gap: normalize('horizontal', 24),
  },
});
