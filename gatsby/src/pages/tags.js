import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import Layout from '../components/Layout';

const TagsStyles = styled.div`
  color: white;
  ol {
    max-width: fit-content;
    line-height: 1.5em;
    margin: 0 auto;
  }
  form {
    display: block;
  }
`;

const TagListStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  font-size: 2.5rem;

  .tag {
    padding: 1.5rem;
    font-size: 1.25rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background: var(--lightGreen);
    color: var(--darkGrey);
    margin: 0 5px;
    text-transform: capitalize;
  }
`;

function TagList({ tagList, removeTag }) {
  return (
    <TagListStyles>
      {tagList.map((tag) => (
        <div key={tag}>
          <p className="tag">
            {tag}{' '}
            <button type="button" onClick={() => removeTag(tag)}>
              <FaTrashAlt style={{ marginLeft: '5px', fontSize: '0.8rem' }} />
            </button>
          </p>
        </div>
      ))}
    </TagListStyles>
  );
}

export default function Tags() {
  const [tagList, setTagList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`A name was submitted: ${inputValue}`);

    // we take the previous array of tags and we spread it in a wrapper function (cf article) and we append our new inputValue.
    //  to prepend (add new value at index0 juste reverse the order)
    // https://javascript.plainenglish.io/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc
    setTagList((prevTagList) => [...prevTagList, inputValue]);
    setInputValue('');
  };

  const removeTag = (element) => {
    console.log(element);
    const newTagList = tagList.filter((tag) => tag !== element);
    setTagList(newTagList);
  };

  return (
    <Layout>
      <TagsStyles>
        <header>
          <h1 className="title">User input tags</h1>
          <ol>
            <li>1. Tags must be removable</li>
            <li>2. Form submit on enter</li>
            <li>3. Can't have duplicate tags</li>
            <li>4. Autocomplete based on JSON list</li>
          </ol>
        </header>
        <main>
          <form
            className="max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 m-auto my-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Enter a tag
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Ruby"
                  onChange={handleChange}
                  value={inputValue}
                />
              </label>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <TagList tagList={tagList} removeTag={removeTag} />
        </main>
      </TagsStyles>
    </Layout>
  );
}
