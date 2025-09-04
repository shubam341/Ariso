import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import ExplorePage from './pages/ExplorePage';
import NotificationPage from './pages/NotificationPage';
import AddPostPage from './pages/AddPostPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main className="pt-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<ProductPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/explore" element={<ExplorePage />} />
             <Route path="/Shop" element={<ShopPage/>} />
            <Route path="/notifications" element={<NotificationPage/>} />
            <Route path="/add-post" element={<AddPostPage/>} />
            
          </Routes>
        </main>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;