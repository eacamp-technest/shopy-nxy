import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackRoutes} from 'router/routes';
import {NavigationParamList} from 'types/navigation.types';
import {
  Camera,
  useCodeScanner,
  useCameraDevice,
} from 'react-native-vision-camera';
import {SvgImage} from 'components/SvgImage';
import {ImageResources} from 'assets/VectorResources.g';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeMainProvider} from 'containers/SafeMainProvider';

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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading camera...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>No camera permission.</Text>
      </View>
    );
  }

  return (
    <SafeMainProvider content={'dark-content'}>
      <Camera
        style={styles.scanner}
        device={device}
        codeScanner={codeScanner}
        isActive={true}
      />
      <View style={styles.icons}>
        <SvgImage source={ImageResources.bell} />
      </View>
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  scanner: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'blue',
  },
  icons: {
    position: 'absolute',
    top: 50,
  },
});
