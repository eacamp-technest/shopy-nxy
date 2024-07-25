import React, {
  useRef,
  useMemo,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import {StyleProp, ViewStyle, StyleSheet, Pressable} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';

interface IFlexBottomSheet {
  height: number;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  handleSheetDismiss?: () => void;
}

export const FlexBottomSheet = forwardRef<BottomSheetModal, IFlexBottomSheet>(
  ({children, onPress, height, disabled, handleSheetDismiss, style}, ref) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    useImperativeHandle(ref, () => ({
      ...bottomSheetModalRef.current,
    }));

    const snapPoints = useMemo(() => [height], [height]);

    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
    }, []);

    const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present();
    }, []);

    const renderBackDrop = () => (
      <Pressable
        style={styles.backdrop}
        onPress={() => bottomSheetModalRef.current?.close()}
      />
    );

    return (
      <Pressable onPress={onPress || handlePresentModalPress}>
        <BottomSheetModal
          index={0}
          snapPoints={snapPoints}
          ref={bottomSheetModalRef}
          enablePanDownToClose={true}
          onChange={handleSheetChanges}
          onDismiss={handleSheetDismiss}
          backdropComponent={renderBackDrop}
          backgroundStyle={[styles.backgroundStyle, style]}
          handleIndicatorStyle={[
            styles.handleIndicatorStyle,
            disabled ? styles.disabledIndicatorStyle : null,
          ]}>
          <BottomSheetView style={styles.contentContainer}>
            {children}
          </BottomSheetView>
        </BottomSheetModal>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: normalize('horizontal', 24),
  },
  handleIndicatorStyle: {
    backgroundColor: colors.skyBase,
    width: normalize('width', 48),
    height: normalize('height', 5),
  },
  disabledIndicatorStyle: {
    backgroundColor: colors.white,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(19, 21, 21, 0.9)',
  },
  backgroundStyle: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
