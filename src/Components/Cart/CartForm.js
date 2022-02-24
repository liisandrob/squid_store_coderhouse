import { useState } from 'react';

import {
  FormControl,
  FormLabel,
  Button,
  Input,
  InputGroup,
  InputLeftAddon, 
  Spinner,
  Text,
  Stack
} from '@chakra-ui/react'

import { FaInfoCircle } from "react-icons/fa";

export const CartForm = ({ handleOnChange, buyer, buyItems, loading, volverVistaAnterior }) => {

  const { name, phone, email, email2 } = buyer;
  const [invalidForm, setInvalidForm] = useState(false);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(phone.length !== 8 || email !== email2) return setInvalidForm(true)
    else {
      if (invalidForm) setInvalidForm(false);
      buyItems();
    }
  }

  return (
    <form
    onSubmit={handleOnSubmit}
    >
      <FormControl isRequired>
        <FormLabel htmlFor='name'>Nombre</FormLabel>
        <Input id='name' type='name' onChange={handleOnChange} value={name} />
      </FormControl>
      <br />
      <FormControl isRequired>
        <FormLabel htmlFor='name'>Teléfono contacto</FormLabel>
        <InputGroup>
          <InputLeftAddon children='+54 9 11' />
          <Input type='phone' id='phone' value={phone} onChange={handleOnChange} />
        </InputGroup>
      </FormControl>
      <br />
      <FormControl isRequired>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input id='email' type='email' onChange={handleOnChange} value={email}/>
      </FormControl>
      <br />
      <FormControl isRequired>
        <FormLabel htmlFor='email'>Confirmar Email</FormLabel>
        <Input id='email2' type='email' onChange={handleOnChange} value={email2}/>
      </FormControl>
      <br />
      {invalidForm &&
      <Stack
      spacing={'3'}
      alignItems={'center'}
      direction='row'
      mb={'15px'}
      >
        <FaInfoCircle 
        color={'white'}
        fontSize={20}
        /> 
        <Text
        color={'white'}
        fontWeight={'bold'}
        align={'center'}
        fontSize={20}
        >
          Revisar emails y/o télefono ingresado
        </Text>
      </Stack> 
      }
      <Stack
      alignItems={'center'}
      // margin-top={'10px'}
      direction='row'
      justifyContent={'space-around'}
      >
        {loading ?
        <Spinner
        size='xl'
        thickness='5px'
        speed='0.65s'
        color='secondary'
        />
        :
        <>
          <Button
          variant='navBtn'
          onClick={() => volverVistaAnterior()}
          >
            Revisar productos
          </Button>
          <Button
          variant='navBtn'
          type='submit'
          >
            Crear orden de compra
          </Button>
        </>
        }
      </Stack>
    </form>
  )
};