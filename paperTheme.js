import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#06D6A0', // Cor personalizada quando em foco
    underlineColor: 'transparent', // Cor da linha de foco transparente
    placeholderTextColor:"#FFFFFF",
  },
};

export default theme;
