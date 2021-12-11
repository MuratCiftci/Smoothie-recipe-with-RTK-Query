import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Routes, Route, Link } from "react-router-dom";
import Hero from './components/Hero/Hero';
import Recipes from './components/Recipes/Recipes';

export  const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Recipes title='Popular' />
      <Recipes title='Latest' />
    </div>
  )
}

