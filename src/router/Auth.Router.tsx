import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen} from 'screens/auth/Onboarding.Screen';
import {LoginScreen} from 'screens/auth/Login.Screen';
import {SignUpScreen} from 'screens/auth/SignUp.Screen';
import {PaymentMethodScreen} from 'screens/auth/PaymentMethod.Screen';
import {ConfirmationScreen} from 'screens/auth/Confirmation.Screen';

const AuthStack = createNativeStackNavigator();

export const AuthRouter = () => {
  return (
    <AuthStack.Navigator initialRouteName="Onboarding">
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
      <AuthStack.Screen name="Confirmation" component={ConfirmationScreen} />
    </AuthStack.Navigator>
  );
};
