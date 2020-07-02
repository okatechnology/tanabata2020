import { colorsData } from '../data/constants';
export const deriveHexFromName = (name: Color) => {
  switch (name) {
    case 'green':
      return colorsData.green.hex;
    case 'lightBlue':
      return colorsData.lightBlue.hex;
    case 'pink':
      return colorsData.pink.hex;
    case 'purple':
      return colorsData.purple.hex;
    case 'yellow':
      return colorsData.yellow.hex;
    case 'blue':
      return colorsData.blue.hex;
    default:
      return '#fffe';
  }
};
