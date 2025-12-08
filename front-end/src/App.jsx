import { BrowserRouter, Route, Routes } from 'react-router';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { GlobalStyle } from './style-guide/GlobalStyle';


function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
