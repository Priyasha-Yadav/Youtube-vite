import React from 'react';
import './MainContent.css';
import Top from '../Top/Top.jsx';
import Contents from '../Contents/Contents.jsx';

function MainContent({ searchQuery, setSearchQuery }) {
  return (
    <div className='mainc'>
      {/* Pass setSearchQuery as a prop to Top */}
      <Top searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Contents searchQuery={searchQuery} />
    </div>
  );
}

export default MainContent;
