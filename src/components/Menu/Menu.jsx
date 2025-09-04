import { useState } from 'react';
import './Menu.css';

function Menu({ onMenuItemClick }) {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold current search query

  const handleMenuItemClick = (item) => {
    setSearchQuery(item);
    onMenuItemClick(item); // Pass the selected item to the parent component
  };

  return (
    <>
      <div className="menu">
        <div className="logo">
          <a href="#">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true"
              alt="hamburger icon"
            />
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true"
              alt="YouTube logo"
            />
          </a>
        </div>

        <div className="menu-cont">
          <a href="#" onClick={() => handleMenuItemClick('home')}>
            <div className="menu-content">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true"
                alt="Home"
              />
              <span>Home</span>
            </div>
          </a>

          <a href="#" onClick={() => handleMenuItemClick('explore')}>
            <div className="menu-content">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true"
                alt="Explore"
              />
              <span>Explore</span>
            </div>
          </a>

          <a href="#" onClick={() => handleMenuItemClick('shorts')}>
            <div className="menu-content">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true"
                alt="Shorts"
              />
              <span>Shorts</span>
            </div>
          </a>

          <a href="#" onClick={() => handleMenuItemClick('subscriptions')}>
            <div className="menu-content">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true"
                alt="Subscriptions"
              />
              <span>Subscriptions</span>
            </div>
          </a>
          <hr className="hr" />
        </div>

        <div className="menu-cont">
          <h4>Explore</h4>
          <a href="#" onClick={() => handleMenuItemClick('trending')}>
            <div className="menu-content">
              <span>Trending</span>
            </div>
          </a>
          <a href="#" onClick={() => handleMenuItemClick('shopping')}>
            <div className="menu-content">
              <span>Shopping</span>
            </div>
          </a>
          <a href="#" onClick={() => handleMenuItemClick('music')}>
            <div className="menu-content">
              <span>Music</span>
            </div>
          </a>
          <a href="#" onClick={() => handleMenuItemClick('movies')}>
            <div className="menu-content">
              <span>Movies</span>
            </div>
          </a>
          <a href="#" onClick={() => handleMenuItemClick('live')}>
            <div className="menu-content">
              <span>Live</span>
            </div>
          </a>
          <a href="#" onClick={() => handleMenuItemClick('gaming')}>
            <div className="menu-content">
              <span>Gaming</span>
            </div>
          </a>
          <a href="#" onClick={() => handleMenuItemClick('news')}>
            <div className="menu-content">
              <span>News</span>
            </div>
          </a>
          <a href="#" onClick={() => handleMenuItemClick('sports')}>
            <div className="menu-content">
              <span>Sports</span>
            </div>
          </a>
          <a href="#" onClick={() => handleMenuItemClick('courses')}>
            <div className="menu-content">
              <span>Courses</span>
            </div>
          </a>
          <a href="#" onClick={() => handleMenuItemClick('fashion')}>
            <div className="menu-content">
              <span>Fashion & Beauty</span>
            </div>
          </a>
          <a href="#" onClick={() => handleMenuItemClick('podcasts')}>
            <div className="menu-content">
              <span>Podcasts</span>
            </div>
          </a>
          <hr className="hr" />
        </div>
      </div>
    </>
  );
}

export default Menu;
