import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "@chakra-ui/react";

import { WaitingMsg } from "Components/Resources/WaitingMsg";
import { ItemList } from "./ItemList";

import fetchSimulator from "fetchSimulator";

export const ItemListContainer = () => {

  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const urlParam = useParams();


  useEffect(() => {
    fetchSimulator(urlParam, 2000)
      .then(response => {
        setData(response);
      })
      .catch(err => {
        console.log(err);
        setErrorMsg(err);
      })

    return (() => {
      setData(null);
      setErrorMsg(null);
    }
    )
  }, [urlParam]);

  return (
    <Container marginTop={'8vh'} maxW={{base:'400px', sm:'container.lg'}} centerContent>
      {data ? <ItemList items={data} /> : <WaitingMsg greeting={errorMsg ? errorMsg : 'Bienvenid@ a Squid Store, estamos cargando los productos..'}/> }
    </Container>
  )
};