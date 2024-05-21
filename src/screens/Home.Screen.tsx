import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {Input} from 'components/Input';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {TabBar} from 'components/TabBar';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';

export const HomeScreen: React.FC = () => {
  return (
    <SafeTopProvider style={styles.provider}>
      <View style={styles.header}>
        <NavBar
          title={'SHOPPAY'}
          leftColor={colors.white}
          rightColor={colors.white}
          styleTitle={styles.titleColor}
          leftIcon={ImageResources.menu}
          rightIcon={ImageResources.shoppingBag}
        />
        <Input
          type={'text'}
          icon={ImageResources.search}
          style={styles.input}
          placeholder={'Search brand, products...'}
        />
        <TabBar />
      </View>
      <View style={styles.main}>
        <Text>HELLO</Text>
      </View>
    </SafeTopProvider>
  );
};

const mainPadding = normalize('horizontal', 24);

const styles = StyleSheet.create({
  provider: {
    backgroundColor: colors.bdazzledBlue.darkest,
  },
  header: {
    paddingHorizontal: mainPadding,
    gap: normalize('vertical', 24),
  },
  main: {
    flex: 1,
    paddingHorizontal: mainPadding,
    backgroundColor: colors.white,
  },
  titleColor: {
    color: colors.white,
  },
  input: {
    backgroundColor: colors.white,
  },
});
