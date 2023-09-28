import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import UserCardPopUp from './components/UserCardPopUp/UserCardPopUp';
import { useState } from 'react';

export default function App() {
  return (
    <div className="app">
      <header className="app-header container">
        <Header />
      </header>
      <main className="app-main container">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}
