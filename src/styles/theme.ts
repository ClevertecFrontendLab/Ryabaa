import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    breakpoints: {
        base: '0px',
        sm: '360px',
        md: '768px',
        lg: '1440px',
        xl: '1920px',
        '2xl': '2000px',
    },
    colors: {
        accent: { 100: '#FFFFD3', 200: '#2DB100', 300: '#eaffc7', 400: '#c4ff61' },
    },
});

export default theme;
