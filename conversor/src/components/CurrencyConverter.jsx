// eslint-disable-next-line
import React from 'react'
import "./CurrencyConverter.css";
import { useState, useEffect } from 'react';
import axios from 'axios';


const CurrencyConverter = () => {

    // eslint-disable-next-line
    const [rates, setRates] = useState(null);
    // eslint-disable-next-line
    const [fromCurrency, setFromCurrency] = useState('USD');
    // eslint-disable-next-line
    const [toCurrency, setToCurrency] = useState('EUR');
    // eslint-disable-next-line
    const [amount, setAmount] = useState(1);
    // eslint-disable-next-line
    const [convertedAmount, setConvertedAmount] = useState(null);

    useEffect(() => {

        axios.get("https://v6.exchangerate-api.com/v6/e953efde5cde071d2f2c28ce/latest/USD").then((response) => {
            setRates(response.data.conversion_rates);
        }).catch((error) => {
            console.log(error);
            return <div>Opa, deu erro!</div>

        });

    }, []);



    useEffect(() => {

        if (rates) {
            const rateFrom = rates[fromCurrency] || 0
            const rateTo = rates[toCurrency] || 0
            setConvertedAmount(((amount / rateFrom) * rateTo).toFixed(2));
        }
        
    }, [fromCurrency, toCurrency, amount, rates]);

    if (!rates) {
        return <div>Carregando taxas de câmbio...</div>;
    }

    return (
        <div className="converter">
            <h2>Conversor de Moedas</h2>
            <input type="number" placeholder='Digite o valor...' value={amount} onChange={(e) => setAmount(e.target.value)} />
            <span>Selecione as moedas</span>
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                {Object.keys(rates).map((currency) => (
                    <option value={currency} key={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <span>para</span>
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                {Object.keys(rates).map((currency) => (
                    <option value={currency} key={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <h3>{convertedAmount} {toCurrency}</h3>
            <p>{amount} {fromCurrency} valem {convertedAmount} {toCurrency}</p>
        </div>
    );
};

export default CurrencyConverter 
