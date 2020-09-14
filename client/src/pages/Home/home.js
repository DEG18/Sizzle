import React, { useState } from "react";
import "./home.css"


const Home = ({ handleSubmit, history }) => {
  const [searchEntry, setSearchEntry] = useState("");

  const updateSearchInput = (e) => {
    setSearchEntry(e.target.value);
  };
  return (
    <div>
      <h1>Home Page!</h1>
        <form
          className="search-form"
          onSubmit={(e) => handleSubmit(e, history, searchEntry)}
        >
          <input
            type="text"
            name="search"
            placeholder="Enter Your Mood"
            onChange={updateSearchInput}
            value={searchEntry}
          />
          <button
            type="submit"
            className={`search-button ${searchEntry.trim() ? "active" : null}`}
            disabled={!searchEntry.trim()}
          >
            <svg height="32" width="32">
              <path
                d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
                fill="#ffffff"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </form>
        <h2>Place Holder for Restaurants</h2>
      </div>
    
    );
}

export default Home;
