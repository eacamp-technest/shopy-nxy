import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {Input} from 'components/Input';
import {normalize} from 'theme/metrics';
import {TabRoutes} from 'router/routes';
import {NavBar} from 'components/NavBar';
import {TabBar} from 'components/TabBar';
import {Steppers} from 'components/Steppers';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const HomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, TabRoutes.home>
> = ({}) => {
  const [count, setCount] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(true);

  const increment = () => {
    setDisabled(false);
    setCount(state => state + 1);
  };

  const decrement = () => {
    if (count === 0) {
      setDisabled(true);
      return;
    }

    setCount(state => state - 1);
  };

  return (
    <SafeTopProvider
      style={colors.bdazzledBlue.darkest}
      content={'light-content'}
      statusBarColor={colors.bdazzledBlue.darkest}>
      <View style={styles.header}>
        <NavBar
          title={'SHOPPAY'}
          leftColor={colors.white}
          rightColor={colors.white}
          styleTitle={colors.white}
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
        <Steppers
          count={count}
          size={'normal'}
          type={'normal'}
          disabled={disabled}
          increment={increment}
          decrement={decrement}
        />
      </View>
    </SafeTopProvider>
  );
};

const mainPadding = normalize('horizontal', 24);

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: mainPadding,
    gap: normalize('vertical', 24),
  },
  main: {
    flex: 1,
    paddingHorizontal: mainPadding,
    backgroundColor: colors.white,
    paddingTop: 50,
  },
  input: {
    backgroundColor: colors.white,
  },
});
