import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landingpage from '../src/Pages/Landingpage'
import css from '../src/assets/styles/index.css'
import navcss from '../src/assets/styles/Nav.css'
import fonts from '../src/assets/styles/fonts.css'
import Navbar from './Layouts/Navbar';
import About from './Pages/Aboutus'
import Vendor from './Pages/Vendor'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/vendor" element={<Vendor />} />
        </Routes>
        <ToastContainer position="bottom-center" />
      </div>
    </BrowserRouter>
  )
}

export default App;