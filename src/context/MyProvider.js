import { createContext, useState, useContext } from 'react';


const AppContext = createContext();
export const useMyContext = () => useContext(AppContext);


const MyProvider = ({ children }) => {
    const [state, setState] = useState([]);

    return (
        <AppContext.Provider value={[state, setState]} >
            {children}
        </AppContext.Provider >
    );
}

export default MyProvider;