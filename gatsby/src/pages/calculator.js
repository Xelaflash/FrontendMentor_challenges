import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
// import addExternalScript from '../utils/addExternalScript.js';

const Display = ({ currentValue }) => (
  <div>
    <div id="display" className="calculator__display">
      {currentValue}
    </div>
  </div>
);

export default function Calculator() {
  const [currentValue, setCurrentValue] = useState('0');
  const [prevValue, setPrevValue] = useState('0');
  const [formula, setFormula] = useState('');
  const [evaluated, setEvaluated] = useState(false);

  const isOperator = /[x/+‑]/;
  const endsWithOperator = /[x+‑/]$/;
  const endsWithNegativeSign = /\d[x/+-]{1}-$/;

  // useEffect(() => {
  //   addExternalScript(
  //     'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
  //   );
  // }, []);

  function maxDigitWarning() {
    setCurrentValue('Digit Limit Met');
    setPrevValue(currentValue);
    setTimeout(() => setCurrentValue(prevValue), 1000);
  }

  function handleEvaluate() {
    if (!currentValue.includes('Limit')) {
      let expression = formula;
      while (endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }
      expression = expression
        .replace(/x/g, '*')
        .replace(/‑/g, '-')
        .replace('--', '+0+0+0+0+0+0+');
      const answer =
        Math.round(1000000000000 * eval(expression)) / 1000000000000;
      setCurrentValue(answer.toString());

      const sanitizedExpression = expression
        .replace(/\*/g, '⋅')
        .replace(/-/g, '‑')
        .replace('+0+0+0+0+0+0+', '‑-')
        .replace(/(x|\/|\+)‑/, '$1-')
        .replace(/^‑/, '-');
      setFormula(`${sanitizedExpression} = ${answer}`);
      setPrevValue(answer);
      setEvaluated(true);
    }
  }

  function handleOperators(e) {
    console.log(endsWithOperator.test(formula));
    if (!currentValue.includes('Limit')) {
      const { value } = e.target;
      setCurrentValue(value);
      setEvaluated(false);
      if (evaluated) {
        setFormula(formula + value);
      } else if (!endsWithOperator.test(formula)) {
        setPrevValue(formula);
        setFormula(formula + value);
      } else if (!endsWithNegativeSign.test(formula)) {
        setFormula(
          (endsWithNegativeSign.test(formula + value) ? formula : prevValue) +
            value
        );
      } else if (value !== '‑') {
        setFormula(prevValue + value);
      }
    }
  }

  function handleNumbers(e) {
    if (!currentValue.includes('Limit')) {
      const { value } = e.target;
      setEvaluated(false);
      if (currentValue.length > 21) {
        maxDigitWarning();
      } else if (evaluated) {
        setCurrentValue(value);
        setFormula(value !== '0' ? value : '');
      } else {
        setCurrentValue(
          currentValue === '0' || isOperator.test(currentValue)
            ? value
            : currentValue + value
        );
        setFormula(
          currentValue === '0' && value === '0'
            ? formula === ''
              ? value
              : formula
            : /([^.0-9]0|^0)$/.test(formula)
            ? formula.slice(0, -1) + value
            : formula + value
        );
      }
    }
  }

  function handleDecimal() {
    if (evaluated === true) {
      setCurrentValue('0.');
      setFormula('0.');
      setEvaluated(false);
    } else if (!currentValue.includes('.') && !currentValue.includes('Limit')) {
      setEvaluated(false);
      if (currentValue.length > 21) {
        maxDigitWarning();
      } else if (
        endsWithOperator.test(formula) ||
        (currentValue === '0' && formula === '')
      ) {
        setCurrentValue('0.');
        setFormula(`${formula}0.`);
      } else {
        setCurrentValue(`${formula.match(/(-?\d+\.?\d*)$/)[0]}.`);
        setFormula(`${formula}.`);
      }
    }
  }

  const initialize = () => {
    setCurrentValue('0');
    setPrevValue('0');
    setFormula('');
    setEvaluated(false);
  };

  return (
    <Layout>
      <CalculatorStyles>
        <div className="container">
          <div className="calculator">
            <Formula formula={formula.replace(/x/g, '⋅')} />
            <Display currentValue={currentValue} />
            <Buttons
              decimal={handleDecimal}
              evaluate={handleEvaluate}
              numbers={handleNumbers}
              operators={handleOperators}
              onClear={initialize}
            />
          </div>
        </div>
      </CalculatorStyles>
    </Layout>
  );
}

function Buttons({ decimal, evaluate, numbers, operators, onClear }) {
  return (
    <div className="calculator__keys">
      <button
        className="key--operator"
        id="add"
        data-action="add"
        type="button"
        onClick={operators}
        value="+"
      >
        +
      </button>
      <button
        className="key--operator"
        data-action="subtract"
        id="subtract"
        type="button"
        onClick={operators}
        value="-"
      >
        -
      </button>
      <button
        className="key--operator"
        id="multiply"
        data-action="multiply"
        type="button"
        onClick={operators}
        value="x"
      >
        &times;
      </button>
      <button
        className="key--operator"
        id="divide"
        data-action="divide"
        type="button"
        onClick={operators}
        value="/"
      >
        ÷
      </button>
      <button id="seven" type="button" onClick={numbers} value="7">
        7
      </button>
      <button id="eight" type="button" onClick={numbers} value="8">
        8
      </button>
      <button id="nine" type="button" onClick={numbers} value="9">
        9
      </button>
      <button id="four" type="button" onClick={numbers} value="4">
        4
      </button>
      <button id="five" type="button" onClick={numbers} value="5">
        5
      </button>
      <button id="six" type="button" onClick={numbers} value="6">
        6
      </button>
      <button id="one" type="button" onClick={numbers} value="1">
        1
      </button>
      <button id="two" type="button" onClick={numbers} value="2">
        2
      </button>
      <button id="three" type="button" onClick={numbers} value="3">
        3
      </button>
      <button id="zero" type="button" onClick={numbers} value="0">
        0
      </button>
      <button
        id="decimal"
        data-action="decimal"
        type="button"
        onClick={decimal}
        value="."
      >
        .
      </button>
      <button
        id="clear"
        data-action="clear"
        type="button"
        onClick={onClear}
        value="AC"
      >
        AC
      </button>
      <button
        className="key--equal"
        id="equals"
        data-action="calculate"
        type="button"
        value="="
        onClick={evaluate}
      >
        =
      </button>
    </div>
  );
}

function Formula({ formula }) {
  return <div className="formulaScreen">{formula}</div>;
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

  .formulaScreen {
    min-height: 40px;
    font-size: 20px;
    color: orange;
    text-align: right;
    vertical-align: text-top;
    line-height: 20px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    padding: 10px;
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
