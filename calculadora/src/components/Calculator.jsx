// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';
import "./Calculator.css";

const Calculator = () => {

    const [currentValue, setCurrentValue] = useState('0'); // This will be used to store the current value
    const [pendingOperation, setPendingOperation] = useState(null); // This will be used to store the operation
    const [pendingValue, setPendingValue] = useState(null); // This will be used to store the value before the operation
    const [completeOperation, setCompleteOperation] = useState(''); // This will be used to display the complete operation


    const keypadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const operations = ['+', '-', '*', '/'];

    const handleClick = (num) => {
        setCurrentValue(prevValue => {
            if (prevValue === '0') {
                return num;
            } else {
                return prevValue + num;
            }
        });
        setCompleteOperation(prevOperation => prevOperation + num);
    }

    const handleOperation = (operation) => {
        setCompleteOperation(currentValue + " " + operation);
        setPendingValue(currentValue);
        setPendingOperation(operation);
        setCurrentValue('0');
    }

    const handleClear = () => {
        setCurrentValue('0');
        setPendingOperation(null);
        setPendingValue(null);
        setCompleteOperation('');
    }

    const handleCalculate = () => {
        if(!pendingOperation || !pendingValue) {
            return;
        }
        const num1 = parseFloat(pendingValue);
        const num2 = parseFloat(currentValue);

        let result

        switch (pendingOperation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                break;
        }
                setCompleteOperation(
                    pendingValue + " " + pendingOperation + " " + currentValue + " = " + result);
                    setCurrentValue(result.toString());
                    setPendingOperation(null);
                    setPendingValue(null);
            
        };

    return (
        <div className="calculator">
            <div className="complete-operation">{completeOperation}</div>
            <div className="display">{currentValue}</div>
            <div className="buttons">
                <button onClick={handleClear}>AC</button>
                {keypadNumbers.map((num) =>
                    <button key={num} onClick={() => handleClick(num)}>
                        {num}
                    </button>
                )}
                {operations.map((operation) =>
                    <button key={operation} onClick={() => handleOperation(operation)}>{operation}</button>
                )}
                <button onClick={handleCalculate}>=</button>
            </div>

        </div>
    )
};

export default Calculator;
