import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Avatar} from 'components/Avatar';
import {SafeTopProvider} from 'containers/SafeTopProvider';

export const NotificationScreen: React.FC = () => {
  return (
    <SafeTopProvider
      content={'light-content'}
      style={colors.blue.base}
      statusBarColor={colors.blue.base}>
      <View style={styles.header} />
      <View style={styles.main}>
        <Avatar
          image={require('../assets/images/Ellipse7.png')}
          size={'large'}
        />
      </View>
    </SafeTopProvider>
  );
};

const mainPadding = normalize('horizontal', 24);

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: mainPadding,
    gap: normalize('vertical', 24),
    height: 100,
  },
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
