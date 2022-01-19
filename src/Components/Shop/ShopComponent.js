import React, { useEffect, useState } from "react";

import { Container } from "@chakra-ui/react";

import { ItemListContainer } from "./ItemListContainer";
import { ItemList } from "./ItemList";

const db = [
  {
    imgUrl : 'https://cdn.shopify.com/s/files/1/0565/8034/1957/products/SquidGameTshirt-OrderSquidGameTeesOrganiccottonTshirtOnline-women-black.jpg?v=1634380538',
    type: 'Ropa',
    price: 2000,
    name: 'Remera Modelo 1'
  },
  {
    imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nTDAf0HeW20Zym4atrow2DXJaudKn05v-A&usqp=CAU',
    type: 'Ropa',
    price: 1500,
    name: 'Remera Modelo 2'
  },
  {
    imgUrl : 'https://m.media-amazon.com/images/I/51YASTF6vmL._AC_UL1057_.jpg',
    type: 'Merchandising',
    price: 700,
    name: 'Llavero'
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