import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import ItemListContainer from "../pages/ItemListContainer";

import Layout from "./Layout";


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />} path={process.env.PUBLIC_URL}>
                <Route index element={<ItemListContainer value="1" />} />
                <Route path="category/:id" element={<ItemListContainer value="1" />} />
                <Route path="detalle/:idItem" element={<ItemDetailContainer />} />
            </Route>
        </Routes>
    </BrowserRouter >
)

export default Router;