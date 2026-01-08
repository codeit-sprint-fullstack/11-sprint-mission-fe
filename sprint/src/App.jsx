import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import MarketPage from "./pages/MarketPage/MarketPage"

function App() {
  return(
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route Path="/Market" element={<MarketPage />}/>
    </Routes>
  )
}
export default App
