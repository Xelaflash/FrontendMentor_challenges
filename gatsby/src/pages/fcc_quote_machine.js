import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaTwitterSquare } from 'react-icons/fa';
import DisplayError from '../components/ErrorMessage';
import Layout from '../components/Layout';
import addExternalScript from '../utils/addExternalScript.js';

const QuoteMachineStyles = styled.div`
  height: 100vh;
  #quote-box {
    color: white;
    padding: 40px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    max-width: 600px;
    min-height: 300px;
    position: relative;
    margin: auto;
    box-shadow: var(--red) 5px 5px, var(--orange) 10px 10px,
      var(--yellow) 15px 15px, var(--violet) 20px 20px, var(--pink) 25px 25px;
  }
  #text {
    margin: 10px;
    p {
      font-size: 22px;
      line-height: 1.4;
      font-weight: 600;
      margin: 40px 10px 0;
      padding: 10px;
    }
    &:before {
      content: '“';
      color: var(--blueGrey);
      font-size: 7.5em;
      font-weight: 700;
      opacity: 0.6;
      position: absolute;
      top: 15px;
      left: 3%;
    }
  }
  #author {
    display: flex;
    justify-content: flex-end;
    margin: 0 100px;
    font-weight: lighter;
  }
  .footer {
    margin: 60px auto 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  #new-quote {
    border: 1px solid white;
    padding: 12px 24px;
    border-radius: 5px;
    margin: 10px;
    transition: all 0.5s;
    &:hover {
      background: white;
      color: black;
      border: 1px solid white;
      box-shadow: rgb(255 255 255 / 30%) 0px 19px 38px,
        rgb(255 255 255 / 22%) 0px 15px 12px;
    }
  }
  #tweet-quote {
    font-size: 50px;
    transition: color 0.3s;
    &:hover {
      color: #2d9bf0;
    }
  }
  @media (max-width: 812px) {
    #quote-box {
      padding: 20px;
      width: 300px;
      margin: auto;
    }
    #text {
      margin: 60px auto 20px;
      p {
        padding: 0;
        margin: 40px 0 0;
      }
      &:before {
        top: -10px;
      }
    }
    #author {
      margin: 0;
    }
    .footer {
      margin: 20px auto 0;
    }
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
    addExternalScript(
      'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
    );
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
    <Layout>
      <div className="quote_machine">
        <QuoteMachineStyles>
          <h1 className="title">FCC Random Quote Machine</h1>
          <div className="wrapper">
            <div id="quote-box">
              <div id="text">
                <p>{quotes.quote}</p>
              </div>
              <div id="author">
                <p>{quotes.author}</p>
              </div>
              <div className="footer">
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
          </div>
        </QuoteMachineStyles>
      </div>
    </Layout>
  );
}
