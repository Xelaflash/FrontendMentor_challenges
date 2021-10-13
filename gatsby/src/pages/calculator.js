import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import addExternalScript from '../utils/addExternalScript.js';

const Display = ({ displayValue }) => (
  <div>
    <div id="display" className="calculator__display">
      0
    </div>
  </div>
);

export default function Calculator() {
  const [currentValue, setCurrentValue] = useState(null);
  const [prevValue, setPrevValue] = useState(0);
  const [formula, setFormula] = useState('');

  function maxDigitWarning() {
    setCurrentValue('Digit Limit Met');
    setPrevValue(currentValue);
    setTimeout(() => setCurrentValue(prevValue), 1000);
  }

  useEffect(() => {
    addExternalScript(
      'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
    );
  }, []);

  return (
    <Layout>
      <CalculatorStyles>
        <div className="container">
          <div className="calculator">
            <Display currentValue={currentValue} />
            <Buttons
            // decimal={handleDecimal}
            // evaluate={handleEvaluate}
            // initialize={initialize}
            // numbers={handleNumbers}
            // operators={handleOperators}
            />
          </div>
        </div>
      </CalculatorStyles>
    </Layout>
  );
}

function Buttons() {
  return (
    <div className="calculator__keys">
      <button
        className="key--operator"
        id="add"
        data-action="add"
        type="button"
      >
        +
      </button>
      <button
        className="key--operator"
        data-action="subtract"
        id="subtract"
        type="button"
      >
        -
      </button>
      <button
        className="key--operator"
        id="multiply"
        data-action="multiply"
        type="button"
      >
        &times;
      </button>
      <button
        className="key--operator"
        id="divide"
        data-action="divide"
        type="button"
      >
        ÷
      </button>
      <button id="seven" type="button">
        7
      </button>
      <button id="eight" type="button">
        8
      </button>
      <button id="nine" type="button">
        9
      </button>
      <button id="four" type="button">
        4
      </button>
      <button id="five" type="button">
        5
      </button>
      <button id="six" type="button">
        6
      </button>
      <button id="one" type="button">
        1
      </button>
      <button id="two" type="button">
        2
      </button>
      <button id="three" type="button">
        3
      </button>
      <button id="zero" type="button">
        0
      </button>
      <button id="decimal" data-action="decimal" type="button">
        .
      </button>
      <button id="clear" data-action="clear" type="button">
        AC
      </button>
      <button
        className="key--equal"
        id="equals"
        data-action="calculate"
        type="button"
      >
        =
      </button>
    </div>
  );
}

const CalculatorStyles = styled.div`
  .container {
    max-width: 20rem;
    margin: 50px auto;
  }

  .container > p {
    text-align: center;
  }

  .calculator {
    border-radius: 12px;
    box-shadow: 0 0 40px 0px rgba(255, 255, 255, 0.7);
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    max-width: 15em;
    overflow: hidden;
  }

  .calculator__display {
    background-color: #222222;
    color: #fff;
    font-size: 1.714285714em;
    padding: 0.5em 0.75em;
    text-align: right;
  }

  .calculator__keys {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(4, 1fr);
    border: 1px solid hsl(227, 5%, 45%);
  }

  .calculator__keys > * {
    background-color: hsl(227, 5%, 50%);
    padding: 1em 1.25em;
    position: relative;
    text-align: center;
  }

  .calculator__keys > *:active::before,
  .calculator__keys > .is-depressed::before {
    background-color: rgba(0, 0, 0, 0.2);
    bottom: 0;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5) inset;
    content: '';
    left: 0;
    opacity: 0.3;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .key--operator {
    background-color: hsl(36, 100%, 52%);
  }

  .key--equal {
    background-color: hsl(36, 100%, 52%);
    grid-column: -2;
    grid-row: 2 / span 4;
  }
`;
