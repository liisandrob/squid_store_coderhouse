import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from 'Context/CartContext';

import { Stack, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import { CartWidget } from './CartWidget';

import { FiChevronDown, FiShoppingCart } from "react-icons/fi";
import { FaTshirt, FaRobot} from "react-icons/fa";

const style = {
  menuItem: {
    _hover:{ 
      bg: '#037a76',
      boxShadow: '0 0 2px 2px #037a76',
      color: 'white'
    },
    _active:{
      bg: '#037a76',
      transform: 'scale(0.95)',
      borderColor: '#249f9c',
      color: 'white'
    },
    _focus:{
      bg: '#037a76',
      boxShadow: '0 0 2px 2px #037a76',
      color: 'white'
    }
  }
};


export const NavBar = () => {
  
  const Cart = useContext(CartContext);
  const { cartList } = Cart

  const calculateTotalQ = (listOfItems) => {
    let totalQ = 0;
    listOfItems.forEach( item => {
      return totalQ += item.quantity
    });
    return totalQ;

  }

  return(
    <nav>
      <Stack direction={'row'} spacing={ {base: '6', sm:'4'}}>
        <Menu>
          <Button as={MenuButton} variant='navBtn' rightIcon={<FiChevronDown />}>
            Tienda
          </Button>
          <MenuList
          bgColor={'#249f9c'} 
          border={'0px'}
          boxShadow={'0 0 2px 2px #037a76'}
          color={'white'}
          >
            <Link to='/category/ropa'>
              <MenuItem 
              fontSize={25}
              icon={<FaTshirt/>}
              _hover={style.menuItem._hover}
              _active={style.menuItem._active}
              _focus={style.menuItem._focus}
              >
                Ropa
              </MenuItem>
            </Link>
            <Link to='/category/merchandising'>
              <MenuItem 
              fontSize={25}
              icon={<FaRobot/>}
              _hover={style.menuItem._hover}
              _active={style.menuItem._active}
              _focus={style.menuItem._focus}
              >
                Merchandising
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        {
         cartList.length > 0 ?
          <Link to='/cart'>
            <Button variant='navBtn'><CartWidget icon={<FiShoppingCart/>}/>{calculateTotalQ(cartList)}</Button>
          </Link>
          :
          null
        }
      </Stack>
    </nav>
  )
}