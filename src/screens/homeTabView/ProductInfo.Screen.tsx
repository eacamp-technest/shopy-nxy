import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import {SceneRendererProps} from 'react-native-tab-view';
import {useProductInfoStore} from 'store/product-info/productInfo.store';

export const ProductInfosScreenTab: React.FC<SceneRendererProps> = ({}) => {
  const {data} = useProductInfoStore();

  const [loading, setLoading] = useState(true);

  const handleLoadStart = () => {
    setLoading(true);
  };

  const handleLoadEnd = () => {
    setLoading(false);
  };

  const renderProduct = ({item, index}: any) => {
    return (
      <View key={index} style={styles.root}>
        <Text style={styles.price}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {loading ? (
          <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
            color={colors.bdazzledBlue.darkest}
          />
        ) : null}
        <Image
          height={300}
          width={300}
          onLoadEnd={handleLoadEnd}
          onLoadStart={handleLoadStart}
          source={{uri: item.images[0]}}
        />
        <Text style={styles.price}>{`Rating: ${item.rating}`}</Text>
        <Text style={styles.price}>{`Price: ${item.price}$`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={data}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: normalize('vertical', 10),
    paddingHorizontal: normalize('horizontal', 24),
    ...CommonStyles.alignJustifyCenter,
  },
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    paddingVertical: normalize('vertical', 30),
  },
  text: {
    fontSize: normalize('font', 40),
    color: colors.bdazzledBlue.darkest,
  },
  description: {
    ...TypographyStyles.RegularNormalRegular,
    color: colors.ink.base,
  },
  price: {
    ...TypographyStyles.RegularNoneSemibold,
    color: colors.ink.base,
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
