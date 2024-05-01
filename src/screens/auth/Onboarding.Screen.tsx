import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text, ImageBackground} from 'react-native';
import {NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {onboardingDate} from 'mock/onboarding.date';
import {CommonStyles} from 'theme/commonStyles';
import {screenWidth, windowWidth} from 'theme/consts.styles';
import {Button} from 'components/Button';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';

export const OnboardingScreen = () => {
  const [currentSliderIndex, setCurrentSliderIndex] = useState<number>(0);

  const updateCurrentSliderIndex = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / screenWidth);
    setCurrentSliderIndex(currentIndex);
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <View style={styles.root}>
        <View style={styles.logo}>
          <Text style={styles.textLogo}>{item.logo}</Text>
        </View>
        <ImageBackground
          resizeMode="contain"
          style={styles.imageBackground}
          source={item.image}>
          <View style={styles.container}>
            <Text style={styles.text}>{item.title}</Text>
            <View style={styles.indicatorContainer}>
              {onboardingDate.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.indicator,
                    currentSliderIndex === index && styles.currentIndicator,
                  ]}
                />
              ))}
            </View>
            <View style={styles.buttons}>
              <Button
                position={'center'}
                type={'primary'}
                text={'Create an account'}
              />
              <Button
                position={'center'}
                type={'dark'}
                text={'Log in Instead'}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <SafeTopProvider>
      <View style={styles.root}>
        <FlatList
          horizontal
          pagingEnabled
          initialScrollIndex={0}
          initialNumToRender={1}
          data={onboardingDate}
          renderItem={renderItem}
          style={CommonStyles.flex}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSliderIndex}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </SafeTopProvider>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  logo: {
    alignItems: 'center',
    paddingTop: normalize('vertical', 32),
  },

  textLogo: {
    color: colors.primary.base,
    ...TypographyStyles.title3,
  },

  text: {
    textAlign: 'center',
    ...TypographyStyles.title2,
  },

  contentContainerStyle: {},

  imageBackground: {
    flex: 1,
    width: windowWidth,
    paddingBottom: 50,
    paddingHorizontal: 24,
  },

  indicatorContainer: {
    gap: normalize('horizontal', 8),
    paddingVertical: normalize('vertical', 10),
    ...CommonStyles.alignJustifyCenterRow,
  },

  buttons: {
    gap: normalize('vertical', 16),
  },

  indicator: {
    height: normalize('height', 8),
    width: normalize('width', 8),
    borderRadius: 999,
    backgroundColor: colors.skyLight,
  },

  currentIndicator: {
    backgroundColor: colors.primary.base,
  },
});
