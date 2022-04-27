import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Page from './components/page/Page';
import Posts from './components/posts/Posts';

function App() {
  return (
      <BrowserRouter>
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/categories/:slug/posts" element={<Posts />} />
            <Route path="/:slug" element={<Page />} />
          </Routes>
        </div>
        
        <Footer />
      </BrowserRouter>
  );
}

export default App;
