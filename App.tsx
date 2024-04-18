import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.root}>
      <Text>Test Text</Text>
    </View>
  );
}

export default App;

// ! Styles

const styles = StyleSheet.create({
  root: {},
});
