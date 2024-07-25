const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const getCurrentDate = () => {
  const now = new Date();
  const month = monthNames[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  return {month, date, year};
};
