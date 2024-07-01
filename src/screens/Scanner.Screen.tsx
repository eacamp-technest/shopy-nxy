import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  Linking,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {StackRoutes} from 'router/routes';
import {NavigationParamList} from 'types/navigation.types';
import {
  Camera,
  useCodeScanner,
  useCameraDevice,
} from 'react-native-vision-camera';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {TypographyStyles} from 'theme/typography';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ScannerScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.scanner>
> = ({navigation}) => {
  const [isScanning, setIsScanning] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);

  const device = useCameraDevice('back');

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      if (isScanning && codes.length > 0) {
        Alert.alert('Scanned Codes', codes.map(code => code.value).join(', '), [
          {
            text: 'Open Link',
            onPress: () => codes[0]?.value && Linking.openURL(codes[0].value),
          },
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => setIsScanning(true),
          },
        ]);
        setIsScanning(false);
      }
    },
  });

  if (!device) {
    return (
      <View style={styles.deviceContainer}>
        <ActivityIndicator size={'large'} color={colors.skyBlue.base} />
        <Text style={styles.loadingText}>Loading camera...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.deviceContainer}>
        <Text>No camera permission.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <SafeTopProvider content={'light-content'}>
          <NavBar
            leftColor={colors.white}
            styleTitle={colors.white}
            title={'Scanner QR Code'}
            leftOnPress={navigation.goBack}
            leftIcon={ImageResources.chevronLeft}
          />
        </SafeTopProvider>
      </View>
      <Camera
        style={styles.scanner}
        device={device}
        codeScanner={codeScanner}
        isActive={true}
      />
      <View style={styles.overlay}>
        <View style={styles.mask} />
        <Text style={styles.text}>Hold the QR code up to the camera</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: normalize('horizontal', 24),
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scanner: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mask: {
    position: 'absolute',
    width: '80%',
    height: '40%',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    fontSize: 18,
    marginTop: 100,
    textAlign: 'center',
    ...TypographyStyles.title3,
    color: colors.white,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  deviceContainer: {
    flex: 1,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary.base,
  },
  loadingText: {
    ...TypographyStyles.title3,
  },
});
