import { Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home'
import Categories from './Pages/Categories'
import Product from './Pages/Product'
import Checkout from './Pages/Checkout'

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
    </Routes>
)

export default Rotas
