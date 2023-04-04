import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import IndexPage from './components/index/IndexPage';
import ProtectedRoute from './components/protected/ProtectedRoute';
import DoctorProvider from './components/hooks/DoctorProvider';
import DoctorContainer from './components/doctor/DoctorContainer';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<IndexPage />} />
        <Route exact path='/user' element={<ProtectedRoute type={'user'}/>} />
        {/* <Route exact path='/doctor' element={<ProtectedRoute type={'doctor'}/>}/> */}
        <Route exact path='/doctor' element={<DoctorProvider><DoctorContainer /></ DoctorProvider>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
