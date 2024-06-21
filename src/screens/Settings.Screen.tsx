import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {settings} from 'mock/settings';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {MainTab} from 'components/MainTab';
import {Divider} from 'components/Divider';
import {useUserStoreActions} from 'store/user';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';

export const SettingsScreen: React.FC = () => {
  const {logout} = useUserStoreActions();

  const handleNextScreen = () => {};

  return (
    <SafeTopProvider backColorSafeProvider={colors.white}>
      <View>
        <NavBar
          title={'SETTINGS'}
          leftColor={colors.ink.base}
          styleTitle={colors.ink.base}
          leftIcon={ImageResources.chevronLeft}
        />
        {settings.map(item => (
          <Fragment key={item.id}>
            {item.id === 4 ? <Divider height={'medium'} /> : null}
            <MainTab
              style={styles.mainTab}
              onPress={item.id === 6 ? logout : handleNextScreen}
              title={item.title}
              leftIcon={item.leftIcon}
              rightIcon={item.rightIcon}
            />
          </Fragment>
        ))}
      </View>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  mainTab: {
    paddingHorizontal: normalize('horizontal', 24),
  },
});
