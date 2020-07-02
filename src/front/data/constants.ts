export const TANZAKU_WIDTH = 50;
export const TANZAKU_HEIGHT = 125;
export const FORM_WIDTH = 300;
export const FORM_HEIGHT = 800;
export const colorsData: ColorObject = {
  green: {
    jaColorName: '黄緑',
    hex: '#c5ffb8ee',
  },
  lightBlue: {
    jaColorName: '水色',
    hex: '#baf4ffee',
  },
  pink: {
    jaColorName: '桃',
    hex: '#ffe0efee',
  },
  purple: {
    jaColorName: '紫',
    hex: '#f3e6ffee',
  },
  yellow: {
    jaColorName: '黄',
    hex: '#fbffccee',
  },
  blue: {
    jaColorName: '青',
    hex: '#5942ff',
  },
};

export const colors = ['purple', 'green', 'lightBlue', 'pink', 'yellow', 'blue'] as const;

export const tanzakuColors: TanzakuColor[] = [
  'green',
  'lightBlue',
  'pink',
  'purple',
  'yellow',
];

export const breakpoint = {
  sp: 480,
  tb: 900,
};

export const mediaQuery = {
  sp: `@media screen and (max-width: ${breakpoint.sp}px)`,
  tb: `@media screen and (max-width: ${breakpoint.tb}px)`,
};
