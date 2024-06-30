import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {StackRoutes} from 'router/routes';
import {NavigationParamList} from 'types/navigation.types';
import {
  Camera,
  useCodeScanner,
  useCameraDevice,
} from 'react-native-vision-camera';
import {colors} from 'theme/colors';
import {SvgImage} from 'components/SvgImage';
import {TypographyStyles} from 'theme/typography';
import {ImageResources} from 'assets/VectorResources.g';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ScannerScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.scanner>
> = () => {
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
      console.log(`Scanned ${codes.length} codes!`);
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
      <Camera
        style={styles.scanner}
        device={device}
        codeScanner={codeScanner}
        isActive={true}
      />
      <View style={styles.overlay}>
        <View style={styles.mask} />
        <View style={styles.iconContainer}>
          <SvgImage
            onPress={() => console.log('Press camera')}
            color={colors.white}
            source={ImageResources.camera}
          />
        </View>
        <Text style={styles.text}>Hold the QR code up to the camera</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
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
