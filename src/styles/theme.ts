import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      500: "#FFBA08"
    },
    gray: {
      100: "#F5F8FA",
      300: "#DADADA",
      700: "#999999",
      900: "#47585B",
    },
  },
  breakpoints: {
    sm: '375px',
    md: '768px',
    lg: '960px',
    xl: '1440px',
    '2xl': '1536px',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        // color: 'gray.50',
      }
    }
  }
})