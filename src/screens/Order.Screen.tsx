import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const OrderScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.order>
> = ({navigation}) => {
  return (
    <SafeTopProvider
      content={'light-content'}
      backColorSafeProvider={colors.bdazzledBlue.darkest}
      statusBarColorAndroid={colors.bdazzledBlue.darkest}>
      <NavBar
        title={'MY ORDERS'}
        leftColor={colors.white}
        styleTitle={colors.white}
        leftOnPress={navigation.goBack}
        leftIcon={ImageResources.chevronLeft}
      />
      <View style={styles.root}>
        <Text>ORDER</Text>
      </View>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
