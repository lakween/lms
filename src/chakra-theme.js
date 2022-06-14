import {extendTheme, ChakraProvider} from '@chakra-ui/react'
import {mode} from "@chakra-ui/theme-tools";

export const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: true
    },
    components: {
        Text: {
            baseStyle: (props) => ({
                color: mode("black", "whiteAlpha.900")(props)
            })
        },
        FormLabel: {
            baseStyle: (props) => ({
                color: mode("black", "whiteAlpha.900")(props)
            })
        },
        Box: {
            baseStyle: (props) => ({
                color: mode("blue.400", "whiteAlpha.900")(props)
            })
        },
        Input: {
            baseStyle: (props) => ({
                color: mode("black", "whiteAlpha.900")(props),
                borderColor: mode("black", "black")(props)
            })
        },
        FormControl: {
            baseStyle: (props) => ({
                color: mode("black", "whiteAlpha.900")(props),
                colorScheme: mode("black", "whiteAlpha.900")(props)
            })
        },
        InputGroup: {
            baseStyle: (props) => ({
                borderColor: mode("black", "black")(props)
            })
        }

    },
    global: (props) => ({
        body: {
            fontFamily: "body",
            color: mode("gray.800", "whiteAlpha.900")(props),
            bg: mode("white", "gray.800")(props),
            transitionProperty: "background-color",
            transitionDuration: "normal",
            lineHeight: "base",
        },
        "*::placeholder": {
            color: mode("black", "whiteAlpha.400")(props),
        },
        "*, *::before, &::after": {
            borderColor: mode("black", "whiteAlpha.300")(props),
            wordWrap: "break-word",
        },
        InputGroup: {
            baseStyle: (props) => ({
                borderColor: mode("black", "black")(props)
            })
        },
        Input: {
            baseStyle: (props) => ({
                color: mode("black", "whiteAlpha.900")(props),
                borderColor: mode("black", "whiteAlpha.900")(props)
            })
        },
    }),
});