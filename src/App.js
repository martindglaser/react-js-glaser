import Router from './App/Router';
import './App/styles.css'
import CartProvider from './context/CartProvider';
import { getItems } from './App/api';

const App = () => <CartProvider><Router /></CartProvider>

export default App;