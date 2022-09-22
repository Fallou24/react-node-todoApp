import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import "./app.css"
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import TaskItem from './pages/TaskItem';

const App = () => {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='taskItem/:id' element={<TaskItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;