import {normalize} from 'theme/metrics';
import {colors} from 'theme/colors';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  orientation: 'portrait',
};

export const authStackScreenOption: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
  contentStyle: {
    backgroundColor: colors.white,
    paddingHorizontal: normalize('horizontal', 24),
  },
};
