import React, { useState } from 'react';
import './Top.css';

function Top({ setSearchQuery }) {
  const [searchInput, setSearchInput] = useState('');

  const categories = [
    { title: 'All', query: '' },
    { title: 'Cook Studio', query: 'Cook Studio' },
    { title: 'UX', query: 'UX' },
    { title: 'Case Study', query: 'Case Study' },
    { title: 'Music', query: 'Music' },
    { title: 'Bangla Lofi', query: 'Bangla Lofi' },
    { title: 'Tour', query: 'Tour' },
    { title: 'Saintmartin', query: 'Saintmartin' },
    { title: 'Tech', query: 'Tech' },
    { title: 'iPhone 13', query: 'iPhone 13' },
    { title: 'User Interface Design', query: 'User Interface Design' },
    { title: 'Computer', query: 'Computer' }
  ];

  const handleCategoryClick = (query) => {
    setSearchInput(query);
    setSearchQuery(query); // immediately send to parent
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    setSearchQuery(value); // live update parent as user types
  };

  return (
    <>
      <div className="top">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={handleInputChange}
          />
          <div className="search-icon" onClick={() => setSearchQuery(searchInput)}>
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
              alt="search icon"
            />
          </div>
        </div>
        <div className="user">
          <a href="#"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="create icon" /></a>
          <a href="#"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="more icon" /></a>
          <a href="#"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="notification bell" /></a>
          <a href="#"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true" alt="user profile" /></a>
        </div>
      </div>
      <hr />
      <div className="recommended">
        <div className="categories">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-item"
              onClick={() => handleCategoryClick(category.query)}
            >
              {category.title}
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}

export default Top;
