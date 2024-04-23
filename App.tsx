import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TypographyStyles} from 'theme/typography';
import BootSplash from 'react-native-bootsplash';
import {colors} from 'theme/colors';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={TypographyStyles.title1}>
        This text uses a thin italic raleway font
      </Text>
    </View>
  );
};
export default App;

// ! Styles

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lavender.light,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
