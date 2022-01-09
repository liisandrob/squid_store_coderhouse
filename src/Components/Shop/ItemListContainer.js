import { Heading } from "@chakra-ui/react";

export const ItemListContainer = ({
  greeting: mensaje
}) => 
    <Heading borderRadius='lg' textAlign={'center'} padding={4} color={'white'} shadow={'-1px 1px 19px 9px #FFFFFF'}>{mensaje}</Heading>