
import React, { useState } from "react";

import { 
  Stack, 
  Image, 
  Text, 
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
 } from "@chakra-ui/react";
import { ItemDetail } from "./ItemDetail";

import fetchSimulator from "fetchSimulator";


export const Item = ({ name, price, stock, imgUrl, detail }) => {
  
  const [itemSelected, setItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const showItemDetail = ({ name, price, stock, imgUrl, detail }) => {
    fetchSimulator({ name, price, stock, imgUrl, detail })
      .then(response => {
        setItem(response)
      })
  }

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
    >
      <Text
      color={'white'}
      fontWeight={'bold'}
      align={'center'}
      >
        {name}
      </Text>
      <Image 
      src={imgUrl}
      h={'250px'}
      w={'250px'}
      borderRadius={'15px'}
      />
      <Text
      color={'white'}
      fontWeight={'bold'}
      align={'center'}
      >
        {detail}
      </Text>

      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={close}
        closeOnBlur={false}
        >
        <PopoverTrigger>
          <Button
          variant='navBtn'
          onClick={() => {open(); showItemDetail({ name, price, stock, imgUrl, detail })}}
          >
            Ver detalle
          </Button>
        </PopoverTrigger>
        <PopoverContent
        bgColor={'primary'} 
        border={'0'}
        shadow={'-1px 1px 15px 4px #FFFFFF'}
        m={'10px'}
        >
          <PopoverArrow
          bgColor={'primary'} 
          />
          <PopoverCloseButton 
          color={'white'}
          />
          {itemSelected ? 
            <ItemDetail {...itemSelected}/>
            :
            <>
              <PopoverBody
              color={'white'}
              fontWeight={'bold'}
              align={'center'}
              >
                Obteniendo información del producto, por favor espere
              </PopoverBody>
            </>
          }
            
        </PopoverContent>
      </Popover>
    </Stack>
  )
}