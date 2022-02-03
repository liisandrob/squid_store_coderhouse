import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "Components/Header";
import { ItemListContainer } from "Components/Shop";
import { ItemDetail } from "Components/ItemDetail";
import Chart from "Components/Chart/ChartComponent";
import NotFoundMsg from "Components/Resources/NotFoundMsg";

function Home() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryName' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetail />}/>
        <Route path='/chart' element={<Chart />}/>
        <Route path='*' element={<NotFoundMsg />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Home;