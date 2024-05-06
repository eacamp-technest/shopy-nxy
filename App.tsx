import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {colors} from 'theme/colors';
import Router from 'router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      // console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.root}>
        <Router />
      </View>
    </SafeAreaProvider>
  );
};
export default gestureHandlerRootHOC(App);

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
