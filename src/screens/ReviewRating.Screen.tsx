import React, {useRef, useCallback, useMemo} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {review} from 'mock/review';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {Button} from 'components/Button';
import {StackRoutes} from 'router/routes';
import {AddPhoto} from 'components/AddPhoto';
import {FlashList} from '@shopify/flash-list';
import {TypographyStyles} from 'theme/typography';
import {IReview, Review} from 'components/Review';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';

const ItemSeparatorComponent = () => {
  return <View style={styles.flashVertical} />;
};

export const ReviewRatingScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.reviewRating>
> = ({navigation}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['75%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // const openPress = () => bottomSheetRef.current?.expand();

  // const closePress = () => bottomSheetModalRef.current?.close();

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

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
    <SafeTopProvider backColorSafeProvider={colors.white}>
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
        <View style={styles.buttonContainer}>
          <Button
            onPress={handlePresentModalPress}
            style={styles.button}
            icon={ImageResources.edit2}
            text={'Write a review'}
          />
        </View>
        <BottomSheetModal
          index={0}
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onChange={handleSheetChanges}
          handleIndicatorStyle={styles.handleIndicatorStyle}>
          <BottomSheetView style={styles.contentContainer}>
            <Text style={styles.mainText}>WHAT IS YOUR RATE?</Text>
            <View style={styles.main}>
              <Text>STARs</Text>
              <Text style={styles.text}>
                Please share your opinion about the product
              </Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description} numberOfLines={3}>
                  The Nike Air Zoom Structure 24 is supportive neutral trainer
                  which can handle most types of runs
                </Text>
              </View>
              <View style={styles.photoContainer}>
                <AddPhoto icon={ImageResources.camera} title="Add photo" />
                <AddPhoto image={require('../assets/images/product2.png')} />
                <AddPhoto image={require('../assets/images/product1.png')} />
              </View>
              <Button text={'Send review'} position={'center'} />
            </View>
          </BottomSheetView>
        </BottomSheetModal>
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
    paddingBottom: normalize('vertical', 120),
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
  contentContainer: {
    flex: 1,
    paddingHorizontal: normalize('horizontal', 24),
  },
  main: {
    gap: normalize('vertical', 32),
  },
  handleIndicatorStyle: {
    backgroundColor: colors.skyBase,
    width: normalize('width', 48),
    height: normalize('height', 5),
  },
  mainText: {
    textAlign: 'center',
    paddingTop: normalize('vertical', 35),
    paddingBottom: normalize('vertical', 29),
    ...TypographyStyles.title3,
    color: colors.ink.base,
  },
  text: {
    textAlign: 'center',
    ...TypographyStyles.RegularNormalSemiBold,
    color: colors.ink.dark,
  },
  photoContainer: {
    flexDirection: 'row',
    gap: normalize('horizontal', 16),
  },
  descriptionContainer: {
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.skyLight,
  },
  description: {
    ...TypographyStyles.RegularNormalRegular,
    color: colors.ink.base,
  },
});
