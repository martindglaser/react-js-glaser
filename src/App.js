import NavBar from './components/NavBarPers';
import ItemListContainer from './components/ItemListContainer';
import { useState } from "react";



const App = () => {
    return (
        <div>
            <div>
                <NavBar />
                <ItemListContainer value="1" />
            </div>
        </div>
    );

}


export default App;