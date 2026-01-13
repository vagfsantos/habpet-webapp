import { BrowserRouter, Route, Routes } from 'react-router';
import { Login } from '@/pages/Login';
import { Home } from '@/pages/Home';
import { GlobalStyle } from '@/style-guide/GlobalStyle';
import { ROUTES } from '@/Routes';
import { Register } from './pages/Register/Register';

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
