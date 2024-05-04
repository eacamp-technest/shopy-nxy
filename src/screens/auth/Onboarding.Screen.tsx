
import React, {Fragment} from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {onboarding} from 'constants/onboarding';
import {CommonStyles} from 'theme/commonStyles';
import {windowWidth} from 'theme/consts.styles';
import {Button} from 'components/Button';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';
import {Pagination} from 'components/Pagination';
import {SvgImage} from 'components/SvgImage';
import {ImageResources} from 'assets/VectorResources.g';

export const OnboardingScreen = () => {
  const renderItem = ({item}: {item: any}) => {
    return item.id === 0 ? (
      <Fragment>
        <View style={styles.logo}>
          <Text style={styles.logoText}>{item.logo}</Text>
        </View>
        <View style={styles.background}>
          <View style={styles.round} />
          <Image
            style={styles.image}
            source={item.image}
            resizeMode={'center'}
          />
          <Text style={styles.title}>{item.title}</Text>
          <Pagination selectedIndex={item.id} style={styles.pagination} />
          <View style={styles.buttons}>
            <Button
              position={'center'}
              type={'primary'}
              text={'Create an account'}
            />
            <Button position={'center'} type={'dark'} text={'Log in Instead'} />
          </View>
        </View>
      </Fragment>
    ) : (
      <Fragment>
        <View style={styles.logo}>
          <Text style={styles.logoText}>{item.logo}</Text>
        </View>
        <View style={[styles.secondary]}>
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
              position={'center'}
              type={'primary'}
              text={'Create an account'}
            />
            <Button position={'center'} type={'dark'} text={'Log in Instead'} />
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
  },
  logo: {
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    paddingTop: normalize('vertical', 32),
  },
  logoText: {
    color: colors.primary.base,
    ...TypographyStyles.title3,
  },
  background: {
    width: windowWidth,
    justifyContent: 'flex-end',
    paddingBottom: normalize('vertical', 37),
    paddingHorizontal: normalize('horizontal', 24),
  },
  round: {
    width: 461,
    height: 461,
    borderRadius: 999,
    top: -197,
    right: 0,
    position: 'absolute',
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  secondary: {
    flex: 1,
    width: windowWidth,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    paddingBottom: normalize('vertical', 37),
    paddingHorizontal: normalize('horizontal', 24),
  },
  smallImage: {
    width: '100%',
    height: normalize('height', 248),
  },
  title: {
    ...TypographyStyles.title2,
  },
  buttons: {
    gap: normalize('vertical', 16),
  },
  pagination: {
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 32),
  },
  main: {
    gap: 24,
    marginTop: normalize('vertical', 32),
    marginBottom: normalize('vertical', 24),
  },
  termContainer: {
    gap: 8,
    paddingTop: normalize('vertical', 54),
    ...CommonStyles.alignJustifyCenterRow,
  },
  textHelpTerms: {
    ...TypographyStyles.mediumLarge,
    color: colors.gray.lighter,
  },
  divider: {
    width: 1,
    height: normalize('height', 15),
    backgroundColor: colors.gray.lighter,
  },
  brands: {
    gap: normalize('horizontal', 24),
    ...CommonStyles.justifyCenterRow,
  },
  nike: {
    gap: normalize('vertical', 24),
    marginBottom: normalize('vertical', 30),
  },
  adidas: {
    gap: normalize('vertical', 24),
    justifyContent: 'flex-end',
  },
});
