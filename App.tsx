import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Router from 'router';
import 'configs/IMLocalize';
import {colors} from 'theme/colors';
import {Toast} from 'components/Toast';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const App = () => {
  return (
    <BottomSheetModalProvider>
      <SafeAreaProvider>
        <Toast />
        <StatusBar
          translucent={true}
          barStyle={'dark-content'}
          backgroundColor={colors.white}
        />
        <View style={styles.root}>
          <Router />
        </View>
      </SafeAreaProvider>
    </BottomSheetModalProvider>
  );
};
export default gestureHandlerRootHOC(App);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
