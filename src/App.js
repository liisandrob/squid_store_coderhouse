import Home from "Pages/Home";
import CartContextProvider from 'Context/CartContext';

function App() {
  return <CartContextProvider><Home /></CartContextProvider>;
}

export default App;
