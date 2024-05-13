import {Regex} from './regex';
import {RegisterOptions} from 'react-hook-form';

export const FormRules = {
  email: {
    required: {
      message: 'Email is required',
      value: true,
    },
    pattern: {
      value: Regex.email,
      message: 'Email is not valid',
    },
  } as RegisterOptions,
  password: {
    required: {
      message: 'Password is required',
      value: true,
    },
    pattern: {
      value: Regex.password,
      message: 'Password is not valid',
    },
  } as RegisterOptions,
  fullName: {
    required: {
      message: 'Full name is required',
      value: true,
    },
    pattern: {
      value: Regex.fullName,
      message: 'Full name is not valid',
    },
  } as RegisterOptions,
};
