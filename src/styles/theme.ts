import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '375px',
  md: '768px',
  lg: '960px',
  xl: '1440px',
  '2xl': '1536px',
})

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
  breakpoints
  // fonts: {
  //   heading: '',
  //   body: ''
  // },
  // styles: {
  //   global: {
  //     body: {
  //       bg: 'gray.900',
  //       color: 'gray.50',
  //     }
  //   }
  // }
})