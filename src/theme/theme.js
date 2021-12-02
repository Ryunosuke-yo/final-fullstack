import { extendTheme } from '@chakra-ui/react'
import {pink} from "./colors"


const theme = extendTheme({
    fonts: {
    body: 'andika',
    },
    colors : {
        mainColor : {
            400 : pink[400],
            300 : pink[300],
            200 : pink[200],
            100 : pink[100],
        }
    }
})

export default theme;