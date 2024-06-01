import React, {memo, useCallback, useEffect} from 'react';
import {StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {colors} from 'theme/colors';
import {SvgImage} from './SvgImage';
import {normalize} from 'theme/metrics';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import {useToastStore} from 'store/toast/toast.store';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Toast: React.FC = memo(() => {
  const top = useSafeAreaInsets().top;
  const translateY = useSharedValue(-100);

  const {show, message, actions, timeoutId, icon} = useToastStore(
    state => state,
  );

  useEffect(() => {
    if (show) {
      translateY.value = withSpring(top, {damping: 15});
    } else {
      translateY.value = withTiming(-100, {duration: 300});
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [show, timeoutId, top, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  const onGestureEvent = useCallback(() => {
    translateY.value = withTiming(-100, {duration: 300}, isFinished => {
      if (isFinished) {
        runOnJS(actions.hideToast)();
      }
    });
  }, [actions.hideToast, translateY]);

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.root, animatedStyle]}>
        {icon ? <SvgImage source={icon} /> : null}
        <Text style={[styles.text]}>{message}</Text>
        <SvgImage
          width={18}
          height={18}
          isPressable
          source={vector}
          pressableHitSlop={8}
          style={styles.pressable}
          onPress={actions.hideToast}
          color={colors.primary.base}
        />
      </Animated.View>
    </PanGestureHandler>
  );
});

const vertical = normalize('vertical', 4);
const horizontal = normalize('horizontal', 8);
const vector = require('../assets/vectors/x-square.svg');

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    alignSelf: 'center',
    width: '90%',
    zIndex: 999,
    borderRadius: 8,
    padding: vertical,
    gap: horizontal,
    minHeight: normalize('height', 56),
    paddingRight: horizontal,
    backgroundColor: colors.white,
    shadowColor: colors.ink.dark,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    ...CommonStyles.alignCenterJustifyBetweenRow,
  } as ViewStyle,
  text: {
    flex: 1,
    flexGrow: 1,
    paddingVertical: vertical,
    ...TypographyStyles.RegularNoneRegular,
  } as TextStyle,
  pressable: {
    padding: vertical,
  } as ViewStyle,
});
