import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage/HomePage"
import MarketPage from "./pages/MarketPage/MarketPage"



function App() {
  return(
      <Routes path='/'>
        <Route index element={<HomePage />} />
        <Route path='/items' element={<MarketPage />} />
      </Routes>
  )
}
export default App
