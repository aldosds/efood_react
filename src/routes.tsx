import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dishes from './pages/Dishes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dishes" element={<Dishes />} />
  </Routes>
)

export default Rotas
