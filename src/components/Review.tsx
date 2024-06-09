import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IReview {
  day: string;
  star: string;
  image: string;
  userName: string;
  description: string;
}

export const Review: React.FC<IReview> = () => {
  return (
    <View style={styles.root}>
      <Text>Review</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
