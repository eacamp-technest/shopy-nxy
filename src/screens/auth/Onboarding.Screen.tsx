import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'components/Button';
import {ImageResources} from 'assets/VectorResources.g';
import {standardHitSlopSize} from 'theme/consts.styles';
import {CommonStyles} from 'theme/commonStyles';

export const OnboardingScreen = () => {
  return (
    <View style={styles.root}>
      {/* Primary */}
      <Button
        hitSlop={standardHitSlopSize}
        icon={ImageResources.messageCircle}
        text={'Create an account'}
        size={'block'}
        types={'primary'}
        position={'left'}
        loading={false}
        onPress={() => console.log('Pressed')}
        style={CommonStyles.alignJustifyCenter}
      />
      <Button
        hitSlop={standardHitSlopSize}
        icon={ImageResources.messageCircle}
        text={'Add to cart'}
        size={'large'}
        types={'primary'}
        position={'left'}
        loading={false}
        onPress={() => console.log('Pressed')}
        style={CommonStyles.alignJustifyCenter}
      />
      <Button
        hitSlop={standardHitSlopSize}
        icon={ImageResources.messageCircle}
        text={'Disabled'}
        size={'large'}
        types={'primary'}
        position={'left'}
        disabled={true}
        loading={false}
        onPress={() => console.log('Pressed')}
        style={CommonStyles.alignJustifyCenter}
      />
      {/* Secondary */}
      <Button
        hitSlop={standardHitSlopSize}
        icon={ImageResources.messageCircle}
        text={'block'}
        size={'block'}
        types={'secondary'}
        position={'left'}
        loading={false}
        onPress={() => console.log('Pressed')}
        style={CommonStyles.alignJustifyCenter}
      />
      <Button
        hitSlop={standardHitSlopSize}
        icon={ImageResources.messageCircle}
        text={'large'}
        size={'large'}
        types={'secondary'}
        position={'left'}
        loading={false}
        onPress={() => console.log('Pressed')}
        style={CommonStyles.alignJustifyCenter}
      />
      <Button
        hitSlop={standardHitSlopSize}
        icon={ImageResources.messageCircle}
        text={'Disabled'}
        size={'large'}
        types={'secondary'}
        position={'left'}
        disabled={true}
        loading={false}
        onPress={() => console.log('Pressed')}
        style={CommonStyles.alignJustifyCenter}
      />
      {/* Outlined */}
      <Button
        hitSlop={standardHitSlopSize}
        icon={ImageResources.messageCircle}
        text={'block'}
        size={'block'}
        types={'outlined'}
        position={'left'}
        loading={false}
        onPress={() => console.log('Pressed')}
      />
      <Button
        hitSlop={standardHitSlopSize}
        icon={ImageResources.messageCircle}
        text={'large'}
        size={'large'}
        types={'outlined'}
        position={'left'}
        loading={false}
        onPress={() => console.log('Pressed')}
      />
      <Button
        hitSlop={standardHitSlopSize}
        icon={ImageResources.messageCircle}
        text={'large'}
        size={'large'}
        disabled={true}
        types={'outlined'}
        position={'left'}
        loading={false}
        onPress={() => console.log('Pressed')}
      />
      {/* Transparent */}
      <Button
        hitSlop={standardHitSlopSize}
        icon={ImageResources.messageCircle}
        text={'block'}
        size={'block'}
        types={'transparent'}
        position={'left'}
        loading={false}
        onPress={() => console.log('Pressed')}
      />
      <Button
        hitSlop={standardHitSlopSize}
        icon={ImageResources.messageCircle}
        text={'Disabled'}
        size={'block'}
        types={'transparent'}
        position={'left'}
        loading={false}
        disabled={true}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    gap: 10,
  },
});
