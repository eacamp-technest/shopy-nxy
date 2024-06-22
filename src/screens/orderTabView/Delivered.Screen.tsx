import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {colors} from 'theme/colors';
import {Order} from 'components/Order';
import {normalize} from 'theme/metrics';
import {Divider} from 'components/Divider';

export const DeliveredScreen = () => {
  return (
    <ScrollView
      style={styles.root}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}>
      <Order
        quantiy={4}
        totalAmount={231}
        date={'12-01-2022'}
        status={'Delivered'}
        orderNumber={19342567}
        trackingNumber={'IWCDFGWETE3456'}
      />
      <Divider height={'small'} />
      <Order
        quantiy={4}
        totalAmount={231}
        date={'12-01-2022'}
        status={'Delivered'}
        orderNumber={19342567}
        trackingNumber={'IWCDFGWETE3456'}
      />
      <Order
        quantiy={4}
        totalAmount={231}
        date={'12-01-2022'}
        status={'Delivered'}
        orderNumber={19342567}
        trackingNumber={'IWCDFGWETE3456'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: normalize('horizontal', 24),
  },
  contentContainerStyle: {
    gap: normalize('vertical', 32),
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 80),
  },
});
