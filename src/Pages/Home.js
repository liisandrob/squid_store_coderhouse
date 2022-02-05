import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "Components/Header";
import { ItemListContainer } from "Components/Shop";
import { ItemDetail } from "Components/ItemDetail";
import Cart from "Components/Cart/CartComponent";
import NotFoundMsg from "Components/Resources/NotFoundMsg";
import FinishShop from "Components/Resources/FinishShop";

function Home() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryName' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetail />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/finished' element={<FinishShop />}/>
        <Route path='*' element={<NotFoundMsg />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Home;