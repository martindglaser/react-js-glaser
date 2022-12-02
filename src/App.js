import Router from './App/Router';
import './App/styles.css'
import MyProvider from './context/MyProvider';
import { getItems } from './App/api';

const App = () => <MyProvider><Router /></MyProvider>

export default App;