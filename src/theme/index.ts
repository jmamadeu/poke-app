import { ThemeProps } from 'styled-components';

export interface ThemeType {
  colors: {
    [x: string]: string;
  };
}

export const theme: ThemeProps<ThemeType> = {
  theme: {
    colors: {
      green: '#00d68f',
      green100: '#43e97b',
      green200: '#38f9d7',

      danger200: '#DB2C66',
      danger500: '#FF3D71',
      primaryGradient: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)',
      basic100: '#fff',
      dark: '#231F20',
      neutral100: '#E4E9F2',
      neutral200: '#F7F9FC',
      neutral500: '#C5CEE0',
      neutral700: '#2E3A59',
      neutral900: '#2E3A59'
    }
  }
};
