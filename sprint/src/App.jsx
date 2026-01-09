import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage/HomePage"
import MarketPage from "./pages/MarketPage/MarketPage"



function App() {
  return(
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/MarketPage' element={<MarketPage />} />
      </Routes>
  )
}
export default App
