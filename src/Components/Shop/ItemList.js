import { Stack } from "@chakra-ui/react";
import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return(
    <Stack 
    direction={'row'}
    spacing={8}
    mt={{base:'5vh', sm:'5vh'}}>
      {items?.map((item, i) => <Item key={i} {...item}/>)}
    </Stack>
  )
}