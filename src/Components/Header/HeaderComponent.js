import { Stack, Box, Image } from '@chakra-ui/react';

import { NavBar } from "./NavBarComponent";

import logo from "../../Assets/logo.png";

export const Header = () => 
  <header>
    <Stack minH={{base: '100px', sm:'60px'}} direction={{base: 'column', sm:'row'}} spacing={2} bgColor='primary' alignItems={'center'} justifyContent={'space-between'} pb={{base: 2, sm: 0}} pl={{base: 0, sm: 3}} pr={{base: 0, sm: 3}}>
      <Box maxWidth={'500px'}>
        <Image alt='logo' src={logo}/>
      </Box>
      <NavBar/>
    </Stack>
  </header>