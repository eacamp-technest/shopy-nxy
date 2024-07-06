import {screenWidth} from 'theme/const.styles';

const gapSizes = 16;
const screenPaddingSize = 16 * 2;
export const cardWidth = Math.floor(
  (screenWidth - screenPaddingSize - gapSizes) / 2,
);
