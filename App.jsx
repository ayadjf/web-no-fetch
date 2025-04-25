import React from 'react';

import Import from './components/Import'; 
import './App.css';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <Import/>
      </div>
    </div>
  );
};

export default App;
