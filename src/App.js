import MainPage from "Pages/MainPage";
import CartContextProvider from 'Context/CartContext';

function App() {
  return <CartContextProvider><MainPage /></CartContextProvider>;
}

export default App;
