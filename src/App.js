import Router from './App/Router';
import './App/styles.css'
import MyProvider from './context/MyProvider';
import { createItem } from './App/api';
import { useState } from 'react';


//const App = () => <MyProvider><Router /></MyProvider>
const App = () => {
    const [descripcion, setDescripcion] = useState('')
    console.log(descripcion)
    return (
        <div>
            <input onChange={e => setDescripcion(e.target.value)} />
            <button onClick={() => { createItem({ descripcion }) }}>Alta</button>
        </div>
    )
}



export default App;