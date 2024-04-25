import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen} from 'screens/auth/Onboarding.Screen';
import {LoginScreen} from 'screens/auth/Login.Screen';
import {SignUpScreen} from 'screens/auth/SignUp.Screen';
import {PaymentMethodScreen} from 'screens/auth/PaymentMethod.Screen';
import {VerificationScreen} from 'screens/auth/Verification.Screen';
import {Routes} from './routes';
import {NavigationParamList} from 'types/navigation.types';
import {authStackScreenOption} from 'configs/navigation.configs';
import {SafeMainProvider} from 'containers/SafeMainProvider';

const AuthStack = createNativeStackNavigator<NavigationParamList>();

export const AuthRouter = () => {
  return (
    <SafeMainProvider>
      <AuthStack.Navigator
        screenOptions={authStackScreenOption}
        initialRouteName={Routes.onboarding}>
        <AuthStack.Screen
          name={Routes.onboarding}
          component={OnboardingScreen}
        />
        <AuthStack.Screen name={Routes.login} component={LoginScreen} />
        <AuthStack.Screen name={Routes.singUp} component={SignUpScreen} />
        <AuthStack.Screen
          name={Routes.paymentMethod}
          component={PaymentMethodScreen}
        />
        <AuthStack.Screen
          name={Routes.verification}
          component={VerificationScreen}
        />
      </AuthStack.Navigator>
    </SafeMainProvider>
  );
};
