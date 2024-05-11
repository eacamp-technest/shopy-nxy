import React, {Fragment} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {onboarding} from 'constants/onboarding';
import {CommonStyles} from 'theme/commonStyles';
import {windowWidth} from 'theme/const.styles';
import {Button} from 'components/Button';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';
import {Pagination} from 'components/Pagination';
import {SvgImage} from 'components/SvgImage';
import {ImageResources} from 'assets/VectorResources.g';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';

export const OnboardingScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.onboarding>
> = ({navigation}) => {
  const renderItem = ({item}: {item: any}) => {
    return item.id === 0 ? (
      <Fragment>
        <View style={styles.logo}>
          <Text style={styles.logoText}>{item.logo}</Text>
        </View>
        <View style={styles.background}>
          <View style={styles.round} />
          <Image
            // style={styles.image}
            // source={item.image}
            // resizeMode={'center'}
            source={item.image}
            resizeMode={item.id === 0 ? 'cover' : 'contain'}
            style={styles.image}
          />
          <Text style={styles.title}>{item.title}</Text>
          <Pagination selectedIndex={item.id} style={styles.pagination} />
          <View style={styles.buttons}>
            <Button
              type={'primary'}
              position={'center'}
              text={'Create an account'}
              onPress={() => navigation.navigate(Routes.login)}
            />
            <Button
              type={'dark'}
              position={'center'}
              text={'Log in Instead'}
              onPress={() => navigation.navigate(Routes.singUp)}
            />
          </View>
        </View>
      </Fragment>
    ) : (
      <Fragment>
        <View style={styles.logo}>
          <Text style={styles.logoText}>{item.logo}</Text>
        </View>
        <View style={styles.secondary}>
          {item.id === 1 ? (
            <Fragment>
              <Image style={styles.smallImage} source={item.image} />
              <View style={styles.main}>
                <Text style={[TypographyStyles.textAlignCenter, styles.title]}>
                  {item.title}
                </Text>
                <Pagination selectedIndex={item.id} />
              </View>
            </Fragment>
          ) : (
            <Fragment>
              <View style={styles.brands}>
                <View style={styles.nike}>
                  <SvgImage source={ImageResources.nike} />
                  <SvgImage source={ImageResources.brand} />
                </View>
                <View style={styles.adidas}>
                  <SvgImage source={ImageResources.adidas} />
                  <SvgImage source={ImageResources.vans} />
                </View>
              </View>
              <View style={styles.main}>
                <Text style={[TypographyStyles.textAlignCenter, styles.title]}>
                  {item.title}
                </Text>
                <Pagination selectedIndex={item.id} />
              </View>
            </Fragment>
          )}
          <View style={styles.buttons}>
            <Button
              type={'primary'}
              position={'center'}
              text={'Create an account'}
              onPress={() => navigation.navigate(Routes.login)}
            />
            <Button
              type={'dark'}
              position={'center'}
              text={'Log in Instead'}
              onPress={() => navigation.navigate(Routes.singUp)}
            />
          </View>
          <View style={styles.termContainer}>
            <Text style={styles.textHelpTerms}>Help</Text>
            <View style={styles.divider} />
            <Text style={styles.textHelpTerms}>Terms</Text>
          </View>
        </View>
      </Fragment>
    );
  };
  return (
    <SafeTopProvider>
      <View style={styles.root}>
        <FlatList
          horizontal
          pagingEnabled
          initialScrollIndex={0}
          initialNumToRender={1}
          data={onboarding}
          renderItem={renderItem}
          style={CommonStyles.flex}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeTopProvider>
  );
};

// !Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.skyLightest,
  } as ViewStyle,
  logo: {
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    paddingTop: normalize('vertical', 32),
  } as ViewStyle,
  logoText: {
    color: colors.primary.base,
    ...TypographyStyles.title3,
  } as TextStyle,
  background: {
    width: windowWidth,
    justifyContent: 'flex-end',
    paddingBottom: normalize('vertical', 37),
    paddingHorizontal: normalize('horizontal', 24),
  } as ViewStyle,
  round: {
    width: 461,
    height: 461,
    borderRadius: 999,
    top: -197,
    right: 0,
    position: 'absolute',
    backgroundColor: colors.white,
  } as ViewStyle,
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    right: 0,
    bottom: 0,
    flex: 1,
  } as ImageStyle,
  secondary: {
    flex: 1,
    width: windowWidth,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    paddingBottom: normalize('vertical', 37),
    paddingHorizontal: normalize('horizontal', 24),
  } as ViewStyle,
  smallImage: {
    width: '100%',
    height: normalize('height', 248),
  } as ImageStyle,
  title: {
    ...TypographyStyles.title2,
  } as TextStyle,
  buttons: {
    gap: normalize('vertical', 16),
  } as ViewStyle,
  pagination: {
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 32),
  } as ViewStyle,
  main: {
    gap: normalize('vertical', 24),
    marginTop: normalize('vertical', 32),
    marginBottom: normalize('vertical', 24),
  } as ViewStyle,
  termContainer: {
    gap: normalize('horizontal', 8),
    paddingTop: normalize('vertical', 54),
    ...CommonStyles.alignJustifyCenterRow,
  } as ViewStyle,
  textHelpTerms: {
    ...TypographyStyles.mediumLarge,
    color: colors.ink.lighter,
  } as TextStyle,
  divider: {
    width: 1,
    height: normalize('height', 15),
    backgroundColor: colors.ink.lighter,
  } as ViewStyle,
  brands: {
    gap: normalize('horizontal', 24),
    ...CommonStyles.justifyCenterRow,
  } as ViewStyle,
  nike: {
    gap: normalize('vertical', 24),
    marginBottom: normalize('vertical', 30),
  } as ViewStyle,
  adidas: {
    gap: normalize('vertical', 24),
    justifyContent: 'flex-end',
  } as ViewStyle,
});
