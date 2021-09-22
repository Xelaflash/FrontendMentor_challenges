import React, { useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/Layout';
import addExternalScript from '../utils/addExternalScript.js';
import { drumPads } from '../data/drum.js';

const DrumMachineStyles = styled.div`
  color: white;
  .drum-wrapper {
    min-height: calc(100vh - 100px);
  }
  .pad-wrapper {
    display: grid;
    grid-template-columns: auto auto auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .drum-pad {
    border: 0.4rem solid var(--darkGreen);
    border-radius: 0.5rem;
    margin: 1rem;
    font-size: 4rem;
    padding: 1.5rem 0.5rem;
    transition: all 0.09s ease;
    width: 15rem;
    text-align: center;
    color: white;
    background: rgba(107, 172, 34, 0.7);
    text-shadow: 0 0 0.5rem black;
  }

  .playing {
    transform: scale(1.2);
    border-color: #e9290f;
    box-shadow: 0 0 1rem #e9290f;
  }

  .sound {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #ffc600;
  }

  .display-wrapper {
    width: fit-content;
    padding: 50px;
    margin: auto;
    text-align: center;
    h1 {
      font-size: 4rem;
      font-weight: bold;
      text-transform: uppercase;
      text-shadow: 0 0 0.5rem green;
      margin: 10px auto;
    }
  }
  #display {
    font-size: 3.5rem;
    text-transform: capitalize;
    font-style: italic;
    color: #ffc600;
  }
`;

export default function DrumMachine() {
  const bgImgData = useStaticQuery(graphql`
    query {
      bgImg: file(relativePath: { eq: "images/drum1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const imageData = bgImgData.bgImg.childImageSharp.fluid;

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function changeText(id) {
    const display = document.querySelector('#display');
    display.innerText = `${id}`;
  }

  const handleClick = (e) => {
    e.currentTarget.classList.add('playing');
    const audioId = e.currentTarget.id;
    const audio = document.querySelector(`#${audioId}`).lastChild;
    if (!audio) return;
    changeText(audioId);
    audio.currentTime = 0;
    audio.play();
  };

  function handleKeyPress(e) {
    const btnElement = document.querySelector(
      `button[data-key="${e.keyCode}"]`
    );
    btnElement.classList.add('playing');
    const BtnAudio = btnElement.lastChild;
    if (!BtnAudio) return;
    changeText(btnElement.id);
    BtnAudio.currentTime = 0;
    BtnAudio.play();
  }

  useEffect(() => {
    addExternalScript(
      'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
    );
    const pads = Array.from(document.querySelectorAll('.drum-pad'));
    pads.forEach((pad) =>
      pad.addEventListener('transitionend', removeTransition)
    );
    window.addEventListener('keydown', handleKeyPress);
  });

  return (
    <Layout>
      <DrumMachineStyles>
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          className="drum-wrapper"
        >
          <div id="drum-machine">
            <div className="display-wrapper">
              <h1>Now Playing</h1>
              <span id="display" />
            </div>
            <div className="pad-wrapper">
              {drumPads.map((pad) => (
                <button
                  type="button"
                  className="drum-pad"
                  id={pad.id}
                  key={pad.id}
                  onClick={handleClick}
                  data-key={pad.keyCode}
                >
                  {pad.keyTrigger}
                  <audio src={pad.sound} className="clip" id={pad.keyTrigger}>
                    <track kind="captions" />
                  </audio>
                </button>
              ))}
            </div>
          </div>
        </BackgroundImage>
      </DrumMachineStyles>
    </Layout>
  );
}
