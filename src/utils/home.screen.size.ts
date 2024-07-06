import {screenWidth} from 'theme/const.styles';

const gapSizes = 48;
const screenPaddingSize = 16 * 2;

const getCardWidth = (screenW: number) => {
  const availableWidth = screenW - screenPaddingSize - gapSizes;

  return Math.floor(availableWidth / 2);
};

export const cardWidth = getCardWidth(screenWidth);
