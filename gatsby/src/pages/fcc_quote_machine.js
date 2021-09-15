import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaTwitterSquare } from 'react-icons/fa';
import DisplayError from '../components/ErrorMessage';

const QuoteMachineStyles = styled.div`
  height: 100vh;
  .page-title {
    text-align: center;
  }
  #quote-box {
    border: 1px solid red;
    max-width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function FccQuoteMachine() {
  const [quotes, setQuotes] = useState([]);
  const [error] = useState();
  const [loading, setLoading] = useState(false);

  function getQuotes() {
    fetch(
      `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setQuotes(data.quotes[Math.floor(Math.random() * data.quotes.length)]);
      });
  }

  useEffect(() => {
    getQuotes();
  }, []);

  const currentQuote = quotes.quote;
  const currentAuthor = quotes.author;

  const twittString = encodeURIComponent(
    `"${currentQuote}" - ${currentAuthor}`
  );

  const twitt = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${twittString}`;

  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;

  return (
    <div className="quote_machine">
      <QuoteMachineStyles>
        <h1 className="page-title">FCC Random Quote Machine</h1>
        <hr />
        <div className="wrapper">
          <div id="quote-box">
            <div id="text">{quotes.quote}</div>
            <div id="author">{quotes.author}</div>
            <button type="button" id="new-quote" onClick={getQuotes}>
              New quote
            </button>
            <a
              href={twitt}
              id="tweet-quote"
              title="Tweet this quote!"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare />
            </a>
          </div>
        </div>
      </QuoteMachineStyles>
    </div>
  );
}
