
import { Stack, Image } from "@chakra-ui/react";
import { ItemCounter } from "./ItemCounter";

export const Item = ({ name, price, stock, imgUrl }) => {
  return (
    <Stack 
    maxW={{base:'300px'}} 
    spacing={'0'}
    >
      <Image 
      shadow={'-1px 1px 15px 4px #FFFFFF'}
      src={imgUrl}
      maxH={'250px'}
      borderRadius={'15px 15px 0 0'} 
      />
      <ItemCounter 
      price={price} 
      name={name}
      stock={stock}
      />
    </Stack>
  )
}