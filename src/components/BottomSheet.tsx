import React, {useCallback, useRef, useMemo} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Button} from './Button';
import {colors} from 'theme/colors';
import {AddPhoto} from './AddPhoto';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';
import {ImageResources} from 'assets/VectorResources.g';
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

interface IActionSheet {
  openPress?: () => void;
  closePress?: () => void;
}

export const BottomSheetAction: React.FC<IActionSheet> = ({}) => {
  const snapPointsValue = normalize('height', 600);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [snapPointsValue], [snapPointsValue]);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const openPress = () => bottomSheetRef.current?.expand();

  const closePress = () => bottomSheetRef.current?.close();

  return (
    <View style={styles.container}>
      <Button onPress={openPress} text={'Open'} position={'center'} />
      <BottomSheet
        index={-1}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
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
                The Nike Air Zoom Structure 24 is asupportive neutral trainer
                which can handle most types of runs
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 16}}>
              <AddPhoto icon={ImageResources.camera} title="Add photo" />
              <AddPhoto image={require('../assets/images/product2.png')} />
              <AddPhoto image={require('../assets/images/product1.png')} />
            </View>
            <Button
              onPress={closePress}
              text={'Send review'}
              position={'center'}
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    // backgroundColor: 'grey',
    // backgroundColor: 'red',
    // backgroundColor: 'transparent',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
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
