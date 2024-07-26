import React, {Fragment, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {review} from 'mock/review';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {Button} from 'components/Button';
import {StackRoutes} from 'router/routes';
import {SvgImage} from 'components/SvgImage';
import {AddPhoto} from 'components/AddPhoto';
import {FlashList} from '@shopify/flash-list';
import {CommonStyles} from 'theme/commonStyles';
import {getCurrentDate} from 'utils/currentDate';
import {TypographyStyles} from 'theme/typography';
import {IReview, Review} from 'components/Review';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {ImageResources} from 'assets/VectorResources.g';
import {FlexBottomSheet} from 'components/FlexBottomSheet';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {screenHeight, standardHitSlopSize} from 'theme/const.styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const height = screenHeight <= 700 ? 510 : 640;

const ItemSeparatorComponent = () => {
  return <View style={styles.flashVertical} />;
};

export const ReviewRatingScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.reviewRating>
> = ({navigation}) => {
  const [text, setText] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);
  const [disabledSend, setDisabledSend] = useState<boolean>(true);
  const [reviewText, setReviewText] = useState<any>(review);
  const [bottomHeight, setBottomHeight] = useState<number>(height);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = () => bottomSheetModalRef.current?.present();

  const {date, month, year} = getCurrentDate();

  const handleCloseModalPress = () => {
    bottomSheetModalRef.current?.close();
    setDisabled(false);
    setBottomHeight(height);
    setDisabledSend(true);
  };

  const handleOnFocusInput = () => {
    setDisabled(true);
    setBottomHeight(900);
  };

  const handleOnBlurFocusInput = () => {
    setDisabled(false);
    setBottomHeight(height);
  };

  const handleOnChangeText = (newText: string) => {
    if (newText) {
      setText(newText);
      setDisabledSend(false);
      return;
    }
    setDisabledSend(true);
  };

  const handleSendReview = () => {
    const newReview = {
      id: reviewText.length + 1,
      description: text,
      name: 'Nadir',
      surname: 'Musayev',
      image: require('../assets/images/nadir.jpeg'),
      date: `${month} ${date} ${year}`.toString(),
    };
    setReviewText((prevReviews: any) => [...prevReviews, newReview]);
    bottomSheetModalRef.current?.close();
    setBottomHeight(height);
    setText('');
    setDisabled(false);
    setDisabledSend(true);
  };

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
            data={reviewText}
            scrollEnabled={false}
            estimatedItemSize={500}
            renderItem={renderReview}
            ItemSeparatorComponent={ItemSeparatorComponent}
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            text={'Write a review'}
            icon={ImageResources.edit2}
            onPress={handlePresentModalPress}
          />
        </View>
        <FlexBottomSheet
          disabled={disabled}
          height={bottomHeight}
          ref={bottomSheetModalRef}
          style={disabled ? styles.borderRadiusDisabled : null}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={CommonStyles.alignCenterJustifyBetweenRow}>
              <View style={styles.extraView} />
              {!disabled ? (
                <Text style={styles.mainText}>WHAT IS YOUR RATE?</Text>
              ) : (
                <Text style={styles.mainText}>What are your thoughts?</Text>
              )}
              <View style={styles.xButton}>
                {disabled ? (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    hitSlop={standardHitSlopSize}
                    onPress={handleCloseModalPress}>
                    <SvgImage
                      color={colors.skyLight}
                      source={ImageResources.xButton}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
            <View style={styles.main}>
              {!disabled ? (
                <Fragment>
                  <View style={styles.stars}>
                    <SvgImage
                      height={36}
                      width={36}
                      color={colors.yellow.base}
                      source={ImageResources.rating}
                    />
                    <SvgImage
                      height={36}
                      width={36}
                      color={colors.yellow.base}
                      source={ImageResources.rating}
                    />
                    <SvgImage
                      height={36}
                      width={36}
                      color={colors.yellow.base}
                      source={ImageResources.rating}
                    />
                    <SvgImage
                      height={36}
                      width={36}
                      color={colors.yellow.base}
                      source={ImageResources.rating}
                    />
                    <SvgImage
                      height={36}
                      width={36}
                      color={colors.skyLight}
                      source={ImageResources.rating}
                    />
                    <SvgImage
                      height={36}
                      width={36}
                      color={colors.skyLight}
                      source={ImageResources.rating}
                    />
                  </View>
                  <Text style={styles.text}>
                    Please share your opinion about the product
                  </Text>
                </Fragment>
              ) : null}
              <View style={styles.descriptionContainer}>
                <TextInput
                  maxLength={100}
                  multiline={true}
                  autoCorrect={false}
                  blurOnSubmit={true}
                  style={styles.input}
                  onFocus={handleOnFocusInput}
                  onBlur={handleOnBlurFocusInput}
                  onChangeText={handleOnChangeText}
                  placeholder=" The Nike Air Zoom Structure 24 is supportive neutral trainer
                  which can handle most types of runs.........."
                />
              </View>
              <View style={styles.photoContainer}>
                <AddPhoto icon={ImageResources.camera} title="Add photo" />
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.contentContainerStyleAddPhoto}
                  horizontal>
                  <AddPhoto image={require('../assets/images/product2.png')} />
                  <AddPhoto image={require('../assets/images/product1.png')} />
                  <AddPhoto image={require('../assets/images/product2.png')} />
                  <AddPhoto image={require('../assets/images/product1.png')} />
                  <AddPhoto image={require('../assets/images/product2.png')} />
                  <AddPhoto image={require('../assets/images/product1.png')} />
                </ScrollView>
              </View>
              <Button
                position={'center'}
                text={'Send review'}
                disabled={disabledSend}
                onPress={handleSendReview}
              />
            </View>
          </ScrollView>
        </FlexBottomSheet>
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
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: normalize('horizontal', 16),
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
    gap: normalize('horizontal', 13),
  },
  descriptionContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: normalize('horizontal', 16),
    borderColor: colors.skyLight,
  },
  input: {
    textAlignVertical: 'top',
    width: '100%',
    padding: 16,
    height: normalize('height', 100),
    ...TypographyStyles.RegularNormalRegular,
    color: colors.ink.base,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(19, 21, 21, 0.9)',
  },
  extraView: {
    width: '15%',
  },
  xButton: {
    width: '15%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  borderRadiusDisabled: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  contentContainerStyleAddPhoto: {
    gap: normalize('horizontal', 13),
  },
});
