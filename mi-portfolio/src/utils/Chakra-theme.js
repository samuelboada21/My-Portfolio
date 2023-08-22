import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    gradient: {
      claro: 'linear-gradient(135deg, #FFC100, #FFEC00 )',
      oscuro: 'linear-gradient(135deg, #2D044E, #5F1E94)',
      triclaro: 'linear-gradient(90deg, #FFC100 0%, #FFEC00 50%, #FFC100 100%)',
      trioscuro: 'linear-gradient(90deg, #2D044E 0%, #5F1E94 50%, #2D044E 100%)',
      redOrange: 'linear-gradient(135deg, #FF6B6B, #FFA500)',
      orangeYellow: 'linear-gradient(135deg, #FFA500, #FFD700)',
      bluePurple: 'linear-gradient(135deg, #6A5ACD, #8A2BE2)',
      pinkRose: 'linear-gradient(135deg, #FF69B4, #FF1493)',
      goldSilver: 'linear-gradient(135deg, #FFD700, #C0C0C0)',
      skyTurquoise: 'linear-gradient(135deg, #87CEEB, #40E0D0)',
      lavenderViolet: 'linear-gradient(135deg, #E6E6FA, #9370DB)',
    },
  },
});

export default theme;