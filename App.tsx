import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgImage} from 'components/SvgImage';
import {ImageResources} from 'assets/VectorResources.g';
import {TypographyStyles} from 'theme/typography';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={TypographyStyles.title1}>
        This text uses a thin italic raleway font
      </Text>
      <Text style={TypographyStyles.title2}>
        This text uses a thin italic raleway font
      </Text>
      <Text style={TypographyStyles.title3}>
        This text uses a thin italic raleway font
      </Text>
      <Text style={TypographyStyles.smallRegular}>
        This text uses a thin italic raleway font
      </Text>
      <SvgImage source={ImageResources.test} />
    </View>
  );
};
export default App;

// ! Styles

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
