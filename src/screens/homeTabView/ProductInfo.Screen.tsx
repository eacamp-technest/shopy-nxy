import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  Modal,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {StackRoutes} from 'router/routes';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import {SceneRendererProps} from 'react-native-tab-view';
import {useProductInfoStore} from 'store/product-info/productInfo.store';

export const ProductInfosScreenTab: React.FC<SceneRendererProps> = ({
  jumpTo,
}) => {
  const {data} = useProductInfoStore();

  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleLoadStart = () => setLoading(true);
  const handleLoadEnd = () => setLoading(false);

  useEffect(() => {
    data?.length === 0 && setModalVisible(true);
  }, [data]);

  const handleModal = () => {
    setModalVisible(false);
    jumpTo(StackRoutes.allStores);
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
          height={250}
          width={250}
          onLoadEnd={handleLoadEnd}
          onLoadStart={handleLoadStart}
          source={{uri: item.images[0]}}
        />
        <Text style={styles.price}>{`Category: ${item.category}`}</Text>
        <Text
          style={styles.price}>{`Warranty: ${item.warrantyInformation}`}</Text>
        <Text style={styles.price}>Dimensions</Text>
        <Text
          style={styles.description}>{`Depth: ${item.dimensions.depth}`}</Text>
        <Text
          style={
            styles.description
          }>{`Height: ${item.dimensions.height}`}</Text>
        <Text
          style={styles.description}>{`Width: ${item.dimensions.width}`}</Text>
        <Text style={styles.price}>{`Rating: ${item.rating}`}</Text>
        <Text style={styles.price}>{`Price: ${item.price}$`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      {modalVisible ? (
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  You did not select a product, please choose a product from the
                  category
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={handleModal}
                  style={[styles.button, styles.buttonClose]}>
                  <Text style={styles.textStyle}>To select a product</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          data={data}
          renderItem={renderProduct}
        />
      )}
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
    textAlign: 'center',
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
  centeredView: {
    flex: 1,
    marginTop: normalize('vertical', 22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    padding: 35,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonClose: {
    backgroundColor: colors.bdazzledBlue.blueBase,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    marginBottom: normalize('vertical', 15),
    ...TypographyStyles.title3,
  },
});
