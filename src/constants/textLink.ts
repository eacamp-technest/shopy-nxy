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

export const verification = {
  highlighted: [
    {
      text: 'Resend Code',
      callback: () => console.log('conditions'),
    },
  ],
  content: 'Didn’t receive code? Resend Code',
};
