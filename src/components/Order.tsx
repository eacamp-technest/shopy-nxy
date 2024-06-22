import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from './Button';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';

interface IOrder {
  date?: string;
  status?: string;
  quantiy?: number;
  totalAmount?: number;
  orderNumber?: number;
  trackingNumber?: string;
}

export const Order: React.FC<IOrder> = ({
  date,
  status,
  quantiy,
  orderNumber,
  totalAmount,
  trackingNumber,
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <View style={CommonStyles.justifyBetweenRow}>
          <Text style={styles.orderText}>{`Order No ${orderNumber}`}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={CommonStyles.justifyBetweenRow}>
          <Text style={styles.mainText}>Tracking Number</Text>
          <Text style={styles.trackingText}>{trackingNumber}</Text>
        </View>
        <View style={CommonStyles.justifyBetweenRow}>
          <Text style={styles.mainText}>Quantiy</Text>
          <Text style={styles.trackingText}>{quantiy}</Text>
        </View>
        <View style={CommonStyles.justifyBetweenRow}>
          <Text style={styles.mainText}>Total Amount</Text>
          <Text style={styles.trackingText}>{`$${totalAmount}`}</Text>
        </View>
        <View style={CommonStyles.justifyBetweenRow}>
          <Text style={styles.mainText}>Status</Text>
          <View style={styles.view}>
            <Text style={styles.status}>{status}</Text>
          </View>
        </View>
      </View>
      <Button type={'outlined'} text={'Details'} position={'center'} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: normalize('vertical', 24),
  },
  main: {
    gap: normalize('vertical', 12),
  },
  orderText: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.ink.base,
  },
  mainText: {
    ...TypographyStyles.SmallNormalRegular,
    color: colors.ink.lighter,
  },
  dateText: {
    ...TypographyStyles.TinyNormalRegular,
    color: colors.ink.lighter,
  },
  trackingText: {
    ...TypographyStyles.TinyNoneSemibold,
    color: colors.ink.base,
  },
  view: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalize('horizontal', 12),
    backgroundColor: colors.lavender.lightest,
  },
  status: {
    ...TypographyStyles.TinyNoneRegular,
    color: colors.lavender.base,
  },
});
