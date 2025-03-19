import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from './pages/Auth/HomePage';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import AboutPage from "./pages/Auth/AboutPage";
import LessonPage from "./pages/Lessons/LessonPage";
import SignLangQuizCategories from "./pages/Dashboard/SignLangQuizCategories";
import ContactPage from './pages/Auth/ContactPage';

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lessons" element={<LessonPage />} />
        <Route path="/quiz-categories" element={<SignLangQuizCategories />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
