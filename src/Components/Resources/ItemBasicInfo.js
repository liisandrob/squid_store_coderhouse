import {
  Image, 
  Text
} from "@chakra-ui/react";

const ItemBasicInfo = ({ name, price, stock, imgUrl }) => {

      
  const priceArgFormat = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });

  return(
  <>
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
    Precio: {priceArgFormat.format(price)}
    </Text>
    <Text
    color={'white'}
    fontWeight={'bold'}
    align={'center'}
    >
    Stock: {stock} {stock === 1 ? 'unidad' : 'unidades'}
    </Text>
  </>
  )
}

export default ItemBasicInfo