import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import AddProduct from './components/AddProduct'
import LoginPage from './components/LoginPage'
import Header from './components/Header'
import RegisterPage from './components/RegisterPage'
import ViewProducts from './components/ViewProducts'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/r" element={<RegisterPage />} />
          <Route path="/h" element={<HomePage />} />
          <Route path="/a" element={<AddProduct />} />
          <Route path="/v" element={<ViewProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
