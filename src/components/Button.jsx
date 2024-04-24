import {StyleSheet, View, Text} from 'react-native';
import {colors} from 'theme/colors';
import {fonts} from 'assets/fonts';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary.main,
    width: 327,
    paddingTop: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.Montserrat - Regular,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16,
  },
});

return (
  <View>
    <Button>
      <Text style={styles.text}>Your text here</Text>
    </Button>
  </View>
);
