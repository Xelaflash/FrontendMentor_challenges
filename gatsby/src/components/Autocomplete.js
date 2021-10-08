import React, { useState } from 'react';
import '../styles/tags.css';

const AutoComplete = ({ suggestions, childToParent, inputValueFromParent }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');

  const onChange = (event) => {
    setActiveSuggestion(0);
    setFilteredSuggestions(
      suggestions.filter(
        (suggestion) =>
          suggestion?.toLowerCase().indexOf(userInput?.toLowerCase()) > -1
      )
    );
    setShowSuggestions(true);
    setUserInput(event.target.value);
    childToParent(event.target.value);
  };

  const handleClick = (event) => {
    setFilteredSuggestions([]);
    setActiveSuggestion(0);
    setShowSuggestions(false);
    setUserInput(event.currentTarget.innerText);
    // assigning value of user input to function in parent component
    childToParent(event.currentTarget.innerText);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
      childToParent(
        filteredSuggestions[activeSuggestion] || inputValueFromParent
      );
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  // suggestions part
  let suggestionsListComponent;
  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === activeSuggestion) {
              className = 'suggestion-active';
            }
            return (
              <li className={className} key={suggestion} onClick={handleClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>No suggestions available.</em>
        </div>
      );
    }
  }

  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
      Enter a tag
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={inputValueFromParent}
          required
        />
        {suggestionsListComponent}
      </label>
    </>
  );
};

export default AutoComplete;
