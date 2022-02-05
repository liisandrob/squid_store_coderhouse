import { extendTheme } from '@chakra-ui/react';


import bgImg from 'Assets/squid-mask.svg'

export default extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black',
        bgGradient: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center",
        bgAttachment: 'fixed'
      }
    }
  },
  colors: {
    primary: '#f44786',
    secondary: '#037a76',
    bgModal: '#037a76b7'
  },
  components: {
    Button: {
      variants: {
        'navBtn': {
          color: 'white',
          bg: '#249f9c',
          boxShadow: '0 0 2px 2px #037a76',
          _hover:{ 
            bg: '#037a76',
            boxShadow: '0 0 2px 2px #037a76',
          },
          _active:{
            bg: '#037a76',
            transform: 'scale(0.95)',
            borderColor: '#249f9c'
          },
          _focus:{
            bg: '#037a76',
            boxShadow: '0 0 2px 2px #037a76',
          }
        }
      },
    },
    Container: {
      variants: {
        'cartBox': {
          bgColor: 'green',
        }
      }
    }
  },
});