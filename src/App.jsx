import './App.css';
import { useState, useRef, useEffect } from 'react';
import logo from './public/logo.svg';
import iconDollar from './public/icon-dollar.svg';
import iconPerson from './public/icon-person.svg';

export default function App() {
  const [tipPercentage, setTipPercentage] = useState(0);
  const [customTip, setCustomTip] = useState(false);
  const customTipRef = useRef(null);
  const [bill, setBill] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const changeTipPercentage = (tipActive) => {
    setTipPercentage(tipActive);
  };

  useEffect(() => {
    if (peopleNumber === 0) {
      setTipAmount(0);
    } else {
      setTipAmount(((bill * tipPercentage) / (peopleNumber * 100)).toFixed(2));
    }
    console.log(tipAmount);
  }, [bill, peopleNumber, tipPercentage]);

  useEffect(() => {
    if (Number(tipAmount) > 0) {
      setTotal((tipAmount + bill) / peopleNumber);
    }
  }, [tipAmount]);

  return (
    <div className="App">
      <img src={logo} width="100px" alt="" />
      <div className="tip-calculator-wrapper">
        <div className="tip-calculator-inputs">
          <div className="calculator-input-wrapper">
            <p className="calculator-body-text">Bill</p>
            <div className="input-bar">
              {/* <span className="dollar">$</span> */}
              <img src={iconDollar} className="dollar" alt="" />
              <input
                type="number"
                name="bill-amount"
                id="bill-amount"
                placeholder="0"
                onChange={(e) => setBill(e.target.value)}
              />
            </div>
          </div>
          <div className="tip-percentage-wrapper">
            <p className="calculator-body-text">Select Tip %</p>
            <span
              className="tip-percentage"
              onClick={() => changeTipPercentage(5)}
              style={
                tipPercentage === 5
                  ? { backgroundColor: 'var(--clr-strong-cyan)' }
                  : {}
              }
            >
              5%
            </span>
            <span
              className="tip-percentage"
              onClick={() => changeTipPercentage(10)}
              style={
                tipPercentage === 10
                  ? { backgroundColor: 'var(--clr-strong-cyan)' }
                  : {}
              }
            >
              10%
            </span>
            <span
              className="tip-percentage"
              onClick={() => changeTipPercentage(15)}
              style={
                tipPercentage === 15
                  ? { backgroundColor: 'var(--clr-strong-cyan)' }
                  : {}
              }
            >
              15%
            </span>
            <span
              className="tip-percentage"
              onClick={() => changeTipPercentage(25)}
              style={
                tipPercentage === 25
                  ? { backgroundColor: 'var(--clr-strong-cyan)' }
                  : {}
              }
            >
              25%
            </span>
            <span
              className="tip-percentage"
              onClick={() => changeTipPercentage(50)}
              style={
                tipPercentage === 50
                  ? { backgroundColor: 'var(--clr-strong-cyan)' }
                  : {}
              }
            >
              50%
            </span>
            {!customTip ? (
              <span
                className="tip-percentage tip-percentage-custom"
                style={!customTip ? {} : { display: 'none' }}
                onClick={() => setCustomTip(true)}
              >
                Custom
              </span>
            ) : (
              <div className="input-bar">
                <input
                  type="number"
                  name="custom-tip"
                  id="custom-tip"
                  ref={customTipRef}
                  placeholder="0"
                  onChange={(e) => setCustomTip(e.target.value)}
                />
              </div>
            )}
          </div>
          <div className="calculator-input-wrapper">
            <p className="calculator-body-text">Number of People</p>
            <div className="input-bar">
              <img src={iconPerson} className="dollar" alt="" />
              <input
                type="number"
                name="bill-amount"
                id="bill-amount"
                placeholder="0"
                onChange={(e) => setPeopleNumber(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="tip-calculator-results">
          <div>
            <p className="calculator-body-text">Tip Amount</p>
            <span>{tipAmount}</span>
            <span>/ person</span>
            <p className="calculator-body-text">Tip Amount</p>
            <span>{total}</span>
            <span>/ person</span>
          </div>
          <button>RESET</button>
        </div>
      </div>
    </div>
  );
}
