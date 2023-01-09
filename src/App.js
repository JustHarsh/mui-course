import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AppBar from './components/AppBar';
import Home from './pages/Home';
import Tour from './pages/Tour';


function App() {
  return (
    <BrowserRouter>
      <AppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Tour />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;