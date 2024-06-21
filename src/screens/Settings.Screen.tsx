import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {settings} from 'mock/settings';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {MainTab} from 'components/MainTab';
import {Divider} from 'components/Divider';
import {useUserStoreActions} from 'store/user';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const SettingsScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.profile>
> = ({navigation}) => {
  const {logout} = useUserStoreActions();

  const screensArray = [StackRoutes.profile];

  const handleNextScreen = (id: number) => {
    navigation.navigate(screensArray[id]);
  };
  return (
    <SafeTopProvider backColorSafeProvider={colors.white}>
      <View>
        <NavBar title={'SETTINGS'} styleTitle={colors.ink.base} />
        {settings.map(item => (
          <Fragment key={item.id}>
            {item.id === 4 ? <Divider height={'medium'} /> : null}
            <MainTab
              style={styles.mainTab}
              onPress={item.id === 6 ? logout : () => handleNextScreen(item.id)}
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
