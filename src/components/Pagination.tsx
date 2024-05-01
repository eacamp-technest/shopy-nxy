import React, {useEffect} from 'react';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/commonStyles';
import {normalize} from 'theme/metrics';
import {SvgImage} from './SvgImage';
import {onboardingDate} from 'mock/onboarding.date';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface IDot {
  index: number;
  animatedIndex: SharedValue<number>;
}

interface IPagination {
  selectedIndex: number;
  listRef: any;
  style?: StyleProp<ViewStyle>;
}

const Dot: React.FC<IDot> = ({index, animatedIndex}) => {
  const animatedDot = useAnimatedStyle(() => {
    return {
      width: interpolate(
        animatedIndex.value,
        [index - 1, index, index + 1],
        [dotSize, 22, dotSize],
        Extrapolation.CLAMP,
      ),
      backgroundColor: interpolateColor(
        animatedIndex.value,
        [index - 1, index, index + 1],
        [shadowWhite, colors.white, shadowWhite],
      ),
    };
  });

  return <Animated.View style={[styles.dot, animatedDot]} />;
};

export const Pagination: React.FC<IPagination> = ({
  selectedIndex,
  listRef,
  style,
}) => {
  const animatedIndex = useSharedValue(selectedIndex);
  const isFirst = selectedIndex === 0;
  const isLast = selectedIndex === onboardingDate.length - 1;

  useEffect(() => {
    animatedIndex.value = withTiming(selectedIndex, {duration: 200});
  }, [animatedIndex, selectedIndex]);

  const renderDots = (_: unknown, index: number) => (
    <Dot key={index} index={index} animatedIndex={animatedIndex} />
  );

  const scrollToBack = () => {
    if (isFirst) {
      return;
    }

    listRef?.current?.scrollToIndex({
      animated: true,
      index: selectedIndex - 1,
    });
  };

  const scrollToForward = () => {
    if (isLast) {
      return;
    }

    listRef?.current?.scrollToIndex({
      animated: true,
      index: selectedIndex + 1,
    });
  };

  return (
    <View style={[CommonStyles.alignCenterJustifyBetweenRow, style]}>
      <Pressable
        disabled={isFirst}
        style={[styles.controller, isFirst && styles.hide]}
        onPress={scrollToBack}>
        <SvgImage
          source={require('../assets/vectors/arrow_back.svg')}
          color={colors.skyLight}
        />
      </Pressable>
      <View style={styles.dots}>{onboardingDate.map(renderDots)}</View>
      <Pressable
        disabled={isLast}
        style={[styles.controller, isLast && styles.hide]}
        onPress={scrollToForward}>
        <SvgImage
          color={colors.skyLight}
          source={require('../assets/vectors/arrow_forward.svg')}
        />
      </Pressable>
    </View>
  );
};

const dotSize = normalize('width', 8);
const shadowWhite = 'rgba(255, 255, 255, 0.32)';

const styles = StyleSheet.create({
  dots: {
    gap: normalize('horizontal', 17),
    ...CommonStyles.alignJustifyCenterRow,
  },
  dot: {
    width: dotSize,
    height: dotSize,
    borderRadius: 28,
  } as ViewStyle,
  controller: {
    paddingHorizontal: normalize('horizontal', 20),
    paddingVertical: normalize('vertical', 12),
    backgroundColor: colors.white,
    borderRadius: 48,
  } as ViewStyle,
  hide: {
    opacity: 0,
  } as ViewStyle,
});
