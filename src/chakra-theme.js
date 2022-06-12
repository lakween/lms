import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const themeConfig = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

const theme = extendTheme({ themeConfig })

export default theme