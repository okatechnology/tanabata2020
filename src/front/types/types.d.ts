type Color = 'pink' | 'lightBlue' | 'purple' | 'yellow' | 'green' | 'blue';

interface Tanzaku {
  id: number;
  contents: string;
  name: string;
  color: Exclude<Color, 'blue'>;
}

interface ColorInfo {
  jaColorName: string;
  hex: string;
}

type ColorObject = Record<Color, ColorInfo>;
