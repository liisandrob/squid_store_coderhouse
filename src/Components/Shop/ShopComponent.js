import { Container } from "@chakra-ui/react";

import { ItemListContainer } from "./ItemListContainer";
import { ItemCounter } from "./ItemCounter";

export const Shop = () => 
    <Container marginTop={'8vh'} maxW={{base:'400px', sm:'container.lg'}} centerContent>
      <ItemListContainer greeting='Bienvenid@ a Squid Store'/>
      <ItemCounter/>
    </Container>