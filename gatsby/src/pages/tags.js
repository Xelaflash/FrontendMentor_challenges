import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaTrashAlt, FaCheckSquare } from 'react-icons/fa';
import Layout from '../components/Layout';
import Autocomplete from '../components/Autocomplete.js';
import '../styles/tags.css';

const TagsStyles = styled.div`
  color: white;
  ol {
    width: max-content;
    line-height: 1.5em;
    margin: 0 auto;
  }
  form {
    display: block;
  }
  aside {
    font-size: 0.85rem;
    color: var(--red);
    margin-left: 15px;
    width: fit-content;
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
    /* background: var(--lightGreen); */
    color: var(--darkGrey);
    margin: 0 5px;
    text-transform: capitalize;
  }
`;

function generateRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}

function Tag({ removeTag, tag }) {
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    setBgColor(generateRandomColor());
  }, []);

  return (
    <div>
      <p className="tag" style={{ background: `${bgColor}` }}>
        {tag}{' '}
        <button type="button" onClick={() => removeTag(tag)}>
          <FaTrashAlt style={{ marginLeft: '5px', fontSize: '0.8rem' }} />
        </button>
      </p>
    </div>
  );
}

function TagList({ tagList, removeTag }) {
  return (
    <TagListStyles>
      {tagList.map((tag) => (
        <Tag tag={tag} key={tag} removeTag={removeTag} />
      ))}
    </TagListStyles>
  );
}

const checkItem = () => {
  const check = localStorage.getItem('My Item');
  // First check for null then check for length
  if (check && check.length) {
    return true;
  }
  return false;
};

export default function Tags() {
  const [tagList, setTagList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const json = localStorage.getItem('tags');
    const savedTags = JSON.parse(json);
    if (savedTags) {
      setTagList(savedTags);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tags', JSON.stringify(tagList));
  }, [tagList]);

  const removeTag = (element) => {
    // console.log(element);
    const newTagList = tagList.filter((tag) => tag !== element);
    setTagList(newTagList);
  };

  const childToParent = (inputValueFromAutocomplete) => {
    setInputValue(inputValueFromAutocomplete);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // we take the previous array of tags and we spread it in a wrapper function (cf article) and we append our new inputValue.
    //  to prepend (add new value at index0 juste reverse the order)
    // https://javascript.plainenglish.io/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc
    setTagList((prevTagList) => {
      // evaluate if user input not in Taglist
      // will return true if item not in array
      if (!prevTagList.includes(inputValue)) {
        return [...prevTagList, inputValue];
      }
      alert(
        `Shoot! You entered: ${inputValue}. This tag is already in the list.`
      );
      return [...prevTagList];
    });
    setInputValue('');
  };

  return (
    <Layout>
      <TagsStyles>
        <header>
          <h1 className="title">User input tags</h1>
          <ol>
            <li>
              1. Tags must be removable{' '}
              <FaCheckSquare
                style={{
                  color: 'var(--lightGreen)',
                  display: 'inline',
                  marginLeft: '5px',
                }}
              />
            </li>
            <li>
              2. Form submit on enter
              <FaCheckSquare
                style={{
                  color: 'var(--lightGreen)',
                  display: 'inline',
                  marginLeft: '5px',
                }}
              />
            </li>
            <li>
              3. Can't have duplicate tags
              <FaCheckSquare
                style={{
                  color: 'var(--lightGreen)',
                  display: 'inline',
                  marginLeft: '5px',
                }}
              />
            </li>
            <li>
              4. Autocomplete based on JSON list
              <FaCheckSquare
                style={{
                  color: 'var(--lightGreen)',
                  display: 'inline',
                  marginLeft: '5px',
                }}
              />
              <span>
                <aside>it was hard</aside>
              </span>
            </li>
            <li>
              5. Bonus: random bg color on tag creation
              <FaCheckSquare
                style={{
                  color: 'var(--lightGreen)',
                  display: 'inline',
                  marginLeft: '5px',
                }}
              />
            </li>
          </ol>
        </header>
        <main>
          <form
            className="max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 m-auto my-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <Autocomplete
                suggestions={['ruby', 'javascript', 'html', 'css', 'php']}
                childToParent={childToParent}
                inputValueFromParent={inputValue}
              />
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
