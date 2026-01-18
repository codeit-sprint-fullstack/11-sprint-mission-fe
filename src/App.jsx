import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage/HomePage"
import MarketPage from "./pages/MarketPage/MarketPage"
import AddItemPage from "./pages/AddItemPage/AddItem"



function App() {
  return(
      <Routes path='/'>
        <Route index element={<HomePage />} />
        <Route path='/items' element={<MarketPage />} />
        <Route path='/registration' element={<AddItemPage /> }/>
      </Routes>
  )
}
export default App
