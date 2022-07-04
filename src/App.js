import { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Home from './Pages/Home';
import Header from './Pages/Header';
import AddNote from './Pages/AddNote';
import EditNote from './Pages/EditNote';

import './App.css';
const Path = createContext()

function App() {
  const [notes, addNotes] = useState([]);
  const [changeNote, setChangeNote] = useState([]);

  return (
    <Box sx={{height: '100%', m: 0}}> 
      <Header/>
      <Path.Provider value={{notes, addNotes, setChangeNote}}>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addnote" element={<AddNote addNotes={addNotes} notes={notes}/>}></Route>
          <Route path="/editnote" element={<EditNote addNotes={addNotes} notes={notes} changeNote={changeNote}/>}></Route>
        </Routes>
      </Path.Provider>
    </Box>
  );
}

export {App, Path};
