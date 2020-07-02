type Color = typeof import('../data/constants').colors[number];
type TanzakuColor = Exclude<Color, 'blue'>;

interface Tanzaku {
  id: number;
  contents: string;
  name: string;
  color: TanzakuColor;
}

interface ColorInfo {
  jaColorName: string;
  hex: string;
}

type ColorObject = Record<Color, ColorInfo>;
