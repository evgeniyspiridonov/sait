import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs'
            Component={() => <DialogsContainer />} />
          <Route path='/profile:userId?'
            Component={() => <Profile />} />
          <Route path='/users'
            Component={() => < UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
