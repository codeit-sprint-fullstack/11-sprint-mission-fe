import { Routes, Route } from 'react-router';
import Market from './pages/Market/Market.page';
import Items from './pages/Items/Items.page';
import Registration from './pages/Registration/Registration.page';
import Landing from './pages/LandingPage/Landing.Page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/market" element={<Market />} />
      <Route path="/items" element={<Items />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
