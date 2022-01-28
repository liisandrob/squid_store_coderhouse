import React, { useEffect, useState } from "react";

import { Container } from "@chakra-ui/react";

import { ItemListContainer } from "./ItemListContainer";
import { ItemList } from "./ItemList";

import fetchSimulator from "fetchSimulator";

export const Shop = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSimulator().then(response => {
      setData(response)
    })
  }, [])

  return (
    <Container marginTop={'8vh'} maxW={{base:'400px', sm:'container.lg'}} centerContent>
      {data ? <ItemList items={data} /> : <ItemListContainer greeting='Bienvenid@ a Squid Store'/> }
      
    </Container>
  )
}