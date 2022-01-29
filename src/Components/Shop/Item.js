import React from "react";
import { Link } from "react-router-dom/";

import { 
  Stack,
  Button
} from "@chakra-ui/react";

import ItemBasicInfo from "Components/Resources/ItemBasicInfo";

export const Item = ({ name, price, stock, imgUrl, id }) => {
  
  return (
    <Stack 
    minH={{base: '400px'}}
    maxW={{base:'300px'}} 
    spacing={'2'}
    bgColor={'primary'} 
    shadow={'-1px 1px 15px 4px #FFFFFF'}
    borderRadius={'15px'}
    p={'10px'}
    justifyContent={'space-around'}
    alignItems={'center'}
    >
      <ItemBasicInfo name={name} price={price} stock={stock} imgUrl={imgUrl} />
      <Link to={`/item/${id}`}
      >
        <Button
        variant='navBtn'
        >
            Ver detalle
        </Button>
      </Link>
    </Stack>
  )
}