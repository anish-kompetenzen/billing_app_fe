import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import Header from './components/Header'
import RegisterPage from './components/RegisterPage'
import ViewProducts from './components/ViewProducts'
import EditCashier from './components/EditCashier'
import AddProducts from './components/AddProducts'
import BillingPage from './components/BillingPage'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/a" element={<AddProducts />} />
          <Route path="/b" element={<BillingPage />} />
          <Route path="/e" element={<EditCashier />} />
          <Route path="/h" element={<HomePage />} />
          <Route path="/v" element={<ViewProducts />} />
          <Route path="/r" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
