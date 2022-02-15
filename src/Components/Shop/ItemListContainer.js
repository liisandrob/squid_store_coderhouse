import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "@chakra-ui/react";

import { WaitingMsg } from "Components/Resources/WaitingMsg";
import { ItemList } from "./ItemList";

import { fetchFirestore } from "db/fetchFirebase";

export const ItemListContainer = () => {

  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const urlParam = useParams();


  useEffect(() => {
    fetchFirestore(urlParam.categoryName)
    .then(response => {
      setData(response)
    })
    .catch(error => {
      console.log(error)
    });

    return (() => {
      setData(null);
      setErrorMsg(null);
    })
  }, [urlParam]);

  return (
    <Container marginTop={'8vh'} maxW={{base:'400px', sm:'container.lg'}} centerContent>
      {data ? <ItemList items={data} /> : <WaitingMsg greeting={errorMsg ? errorMsg : 'Bienvenid@ a Squid Store, estamos cargando los productos..'}/> }
    </Container>
  )
};