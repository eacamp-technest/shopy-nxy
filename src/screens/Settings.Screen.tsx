import React, {Fragment, useEffect} from 'react';
import {StyleSheet, ScrollView, Alert, Linking} from 'react-native';
import {colors} from 'theme/colors';
import {settings} from 'mock/settings';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {MainTab} from 'components/MainTab';
import {Divider} from 'components/Divider';
import {useUserStoreActions} from 'store/user';
import {StackRoutes, TabRoutes} from 'router/routes';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const SettingsScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, TabRoutes.settings>
> = ({navigation}) => {
  const {logout} = useUserStoreActions();

  const screensArray = [StackRoutes.profile, StackRoutes.order];

  const handleNextScreen = (id: number) => {
    navigation.navigate(screensArray[id]);
  };

  const checkCameraPermission = async () => {
    const checkCamera = await check(PERMISSIONS.IOS.CAMERA);
    if (checkCamera === RESULTS.BLOCKED) {
      Alert.alert(
        'Camera permission is blocked',
        'Please enable camera permission in settings',
        [
          {
            text: 'Open settings',
            onPress: Linking.openSettings,
            isPreferred: true,
          },
          {
            text: 'Cancel',
            isPreferred: false,
          },
        ],
      );
    }
  };

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const handlePermissionMedia = () => {
    console.log('Permissions media');
  };

  return (
    <SafeTopProvider backColorSafeProvider={colors.white}>
      <NavBar title={'SETTINGS'} styleTitle={colors.ink.base} />
      <ScrollView showsVerticalScrollIndicator={false}>
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
            {item.id === 5 ? (
              <>
                <MainTab
                  style={styles.mainTab}
                  title={'Permission camera'}
                  rightIcon={item.rightIcon}
                  leftIcon={ImageResources.camera}
                  onPress={checkCameraPermission}
                />
                <MainTab
                  style={styles.mainTab}
                  title={'Permission media'}
                  leftIcon={ImageResources.media}
                  rightIcon={item.rightIcon}
                  onPress={handlePermissionMedia}
                />
              </>
            ) : null}
          </Fragment>
        ))}
      </ScrollView>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  mainTab: {
    paddingHorizontal: normalize('horizontal', 24),
  },
});
