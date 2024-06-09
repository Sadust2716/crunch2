import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import RegPage from './Pages/RegPage';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Blog from './Pages/Blog';
import Catalog from './Pages/Catalog';
import ProfilePage from './Pages/ProfilePage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/RegPage" element={<RegPage />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

