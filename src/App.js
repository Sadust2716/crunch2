import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Footer from './Components/Footer';


import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import RegPage from './Pages/RegPage'; // Компоненты хэдэра

import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Blog from './Pages/Blog'; // Компоненты футера

import Catalog from './Pages/Catalog'; 



function App() {
  return (
    <div>
     <Header />
     <Router>
                <Routes>
                 <Route path ="/" element ={<Home />} />
                 <Route path ="/about" element ={<About />} />
                 <Route path ="/contacts" element ={<Contacts />} />
                 <Route path ="/blog" element ={<Blog />} />
                 <Route path ="/loginPage" element ={<LoginPage />} />
                 <Route path ="/RegPage" element ={<RegPage />} />
                 <Route path ="/Catalog" element ={<Catalog />} />
                </Routes>
            </Router>
     <Footer />
    </div>

  );
}

export default App;
