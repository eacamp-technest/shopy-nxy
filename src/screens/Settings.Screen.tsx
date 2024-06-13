import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Button} from 'components/Button';
import {NavBar} from 'components/NavBar';
import {useUserStoreActions} from 'store/user';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';

export const SettingsScreen: React.FC = () => {
  const {logout} = useUserStoreActions();

  return (
    <SafeTopProvider style={colors.white}>
      <View style={styles.root}>
        <NavBar
          title={'SETTINGS'}
          leftColor={colors.ink.base}
          styleTitle={colors.ink.base}
          leftIcon={ImageResources.chevronLeft}
        />
      </View>
      <Button onPress={logout} text={'Logout'} position={'center'} />
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: normalize('horizontal', 24),
  },
});
