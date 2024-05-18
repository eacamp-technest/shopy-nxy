import React from 'react';
import {LoginScreen} from 'screens/auth/Login.Screen';
import {SignUpScreen} from 'screens/auth/SignUp.Screen';
import {Routes} from './routes';
import {NavigationParamList} from 'types/navigation.types';
import {
  authStackScreenOption,
  defaultScreenOptions,
} from 'configs/navigation.configs';
import {SaveCardScreen} from 'screens/auth/SaveCard.Screen';
import {YourCardScreen} from 'screens/auth/YourCard.Screen';
import {OnboardingScreen} from 'screens/auth/Onboarding.Screen';
import {AddNewCardScreen} from 'screens/auth/AddNewCard.Screen';
import {VerificationScreen} from 'screens/auth/Verification.Screen';
import {PaymentMethodScreen} from 'screens/auth/PaymentMethod.Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator<NavigationParamList>();

export const AuthRouter = () => {
  return (
    <AuthStack.Navigator
      screenOptions={authStackScreenOption}
      initialRouteName={Routes.onboarding}>
      <AuthStack.Screen
        name={Routes.onboarding}
        component={OnboardingScreen}
        options={defaultScreenOptions}
      />
      <AuthStack.Screen name={Routes.login} component={LoginScreen} />
      <AuthStack.Screen name={Routes.singUp} component={SignUpScreen} />
      <AuthStack.Screen
        name={Routes.paymentMethod}
        component={PaymentMethodScreen}
      />
      <AuthStack.Screen name={Routes.addNewCard} component={AddNewCardScreen} />
      <AuthStack.Screen name={Routes.saveCard} component={SaveCardScreen} />
      <AuthStack.Screen name={Routes.yourCard} component={YourCardScreen} />

      <AuthStack.Screen
        name={Routes.verification}
        component={VerificationScreen}
      />
    </AuthStack.Navigator>
  );
};
