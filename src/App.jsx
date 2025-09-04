import React, { useState } from 'react';
import './style.css';
import MainContent from './components/MainContent/MainContent.jsx';
import Menu from './components/Menu/Menu.jsx';

function App() {
  const [searchQuery, setSearchQuery] = useState('');  // State for the search query

  return (
    <div className="main">
      <Menu onMenuItemClick={setSearchQuery} />  {/* Pass setSearchQuery as onMenuItemClick */}
      <MainContent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
}

export default App;
