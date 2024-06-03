import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CommonStyles} from 'theme/commonStyles';
import {Button} from './Button';
import {Divider} from './Divider';

interface IOrder {
  orderNumber?: number;
  trackingNumber?: string;
  totalAmount?: number;
  quantiy?: number;
  status?: string;
  date?: string;
}

export const Order: React.FC<IOrder> = ({
  orderNumber,
  trackingNumber,
  quantiy,
  totalAmount,
  status,
  date,
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <View style={CommonStyles.justifyBetweenRow}>
          <Text>{`Order No ${orderNumber}`}</Text>
          <Text>{date}</Text>
        </View>
        <View style={CommonStyles.justifyBetweenRow}>
          <Text>Tracking Number</Text>
          <Text>{trackingNumber}</Text>
        </View>
        <View style={CommonStyles.justifyBetweenRow}>
          <Text>Quantiy</Text>
          <Text>{quantiy}</Text>
        </View>
        <View style={CommonStyles.justifyBetweenRow}>
          <Text>Total Amount</Text>
          <Text>{`$${totalAmount}`}</Text>
        </View>
        <View style={CommonStyles.justifyBetweenRow}>
          <Text>Status</Text>
          <Text>{status}</Text>
        </View>
      </View>
      <Button type={'outlined'} text={'Details'} position={'center'} />
      <Divider height={'medium'} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 24,
  },
  main: {
    gap: 12,
  },
});
