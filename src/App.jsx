import { Route, Routes } from 'react-router';
import { HomePage } from './domains/Home/pages/HomePage';
import { ItemPage } from './domains/Item/pages/ItemPage';
import { RegistrationPage } from './domains/Registration/pages/RegistrationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items" element={<ItemPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
}

export default App;
