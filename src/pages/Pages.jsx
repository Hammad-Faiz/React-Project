import Home from "./Home";
import React from 'react'
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import PostForm from './PostForm'
import {Route, Routes,} from 'react-router-dom'

function Pages() {
  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />}/>
          <Route path="/recipe/:name" element={<Recipe />}/>
          <Route path="/insertmeal" element={<PostForm />}/>
        </Routes>
  );
}

export default Pages
