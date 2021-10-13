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
              decimal={handleDecimal}
              evaluate={handleEvaluate}
              initialize={initialize}
              numbers={handleNumbers}
              operators={handleOperators}
            />
          </div>
        </div>
      </CalculatorStyles>
    </Layout>
  )
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
