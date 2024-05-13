// ! MODAL

export const modal = {
  highlighted: [
    {
      text: 'Terms of Service and Conditions ',
      callback: () => console.log('conditions'),
    },
  ],

  content:
    'I agree to the Terms of Service and Conditions of Use including consent to electronic communications and I affirm that the information provided is my own.',
};

// ! VERIFICATION

export const verification = {
  highlighted: [
    {
      text: 'Resend Code',
      callback: () => console.log('conditions'),
    },
  ],
  content: 'Didn’t receive code? Resend Code',
};

// ! SIGNUP

export const signUp = {
  highlighted: [
    {
      text: 'Terms',
      callback: () => console.log('terns'),
    },
    {
      text: 'Conditions of Use',
      callback: () => console.log('conditions'),
    },
  ],
  content: 'By signing up you agree to our Terms and Conditions of Use',
};

// ! LOGIN

export const login = {
  highlighted: [
    {
      text: 'Log in',
      callback: () => console.log('conditions'),
    },
  ],
  content: 'Already have an account? Log in',
};
