import React, { useEffect, useState } from "react";

import { Container } from "@chakra-ui/react";

import { ItemListContainer } from "./ItemListContainer";
import { ItemList } from "./ItemList";

const db = [
  {
    imgUrl : 'https://cdn.shopify.com/s/files/1/0565/8034/1957/products/SquidGameTshirt-OrderSquidGameTeesOrganiccottonTshirtOnline-women-black.jpg?v=1634380538',
    type: 'Ropa',
    price: 200,
    name: 'Remera Modelo 1'
  },
  {
    imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nTDAf0HeW20Zym4atrow2DXJaudKn05v-A&usqp=CAU',
    type: 'Ropa',
    price: 150,
    name: 'Remera Modelo 2'
  },
]

const getItemList = () => {
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve(db)
    }, 3000)
  })
}

export const Shop = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    getItemList().then(response => {
      setData(response)
    })
  }, [])

  return (
    <Container marginTop={'8vh'} maxW={{base:'400px', sm:'container.lg'}} centerContent>
      {data ? <ItemList items={data} /> : <ItemListContainer greeting='Bienvenid@ a Squid Store'/> }
      
    </Container>
  )
}