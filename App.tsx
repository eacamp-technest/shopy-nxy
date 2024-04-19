import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.ralewayItalicBebas}>
        This text uses a thin italic raleway font
      </Text>
      <Text style={styles.ralewayItalicBebasReg}>
        This text uses a thin italic raleway font
      </Text>
      <Text style={styles.ralewayItalicBebasLigh}>
        This text uses a thin italic raleway font
      </Text>
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

  ralewayItalicBebas: {
    fontFamily: 'BebasNeue-Bold',
    fontSize: 30,
  },

  ralewayItalicBebasReg: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: 30,
  },
  ralewayItalicBebasLigh: {
    fontFamily: 'BebasNeue-Light',
    fontSize: 30,
  },
});
