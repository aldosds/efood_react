import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dishes from './pages/Dishes'
// import Products from './pages/Dishes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dishes/:id" element={<Dishes />} />
    {/* <Route path="/products/:id" element={<Products />} /> */}
  </Routes>
)

export default Rotas
