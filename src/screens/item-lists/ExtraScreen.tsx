import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {TypographyStyles} from 'theme/typography';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface IParams {
  color: string;
  [key: string]: any;
}

export const ExtraScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.extra>
> = ({navigation, route}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const params = (route.params ?? {}) as IParams;
  const {color, ...otherData} = params;

  const handleLoadStart = () => setLoading(true);
  const handleLoadEnd = () => setLoading(false);

  return (
    <SafeTopProvider content={'light-content'} backColorSafeProvider={color}>
      <View style={styles.main}>
        <NavBar
          title={otherData.products[0].category}
          leftColor={colors.white}
          styleTitle={colors.white}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
        />
      </View>
      <ScrollView
        style={{backgroundColor: color}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        {otherData.products.map((item: any, index: number) => {
          return (
            <View key={index} style={styles.container}>
              {loading ? (
                <ActivityIndicator
                  size="large"
                  color={colors.white}
                  style={styles.activityIndicator}
                />
              ) : null}
              <Image
                height={300}
                width={300}
                onLoadEnd={handleLoadEnd}
                onLoadStart={handleLoadStart}
                source={{uri: item.images[0]}}
              />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeTopProvider>
  );
};

const mainPadding = normalize('horizontal', 24);

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: mainPadding,
  },
  contentContainerStyle: {
    paddingHorizontal: mainPadding,
    paddingBottom: normalize('vertical', 50),
  },
  scrollContainer: {
    backgroundColor: colors.blue.base,
  },
  container: {
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: colors.white,
  },
  title: {
    paddingBottom: normalize('vertical', 10),
    ...TypographyStyles.RegularNoneRegular,
    color: colors.white,
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
