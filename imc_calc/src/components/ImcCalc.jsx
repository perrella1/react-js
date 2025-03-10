import Button from "./Button";
import {useState} from "react";

import "./ImcCalc.css";

const ImcCalc = ({calcImc}) => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState ("");

    const clearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9.]/g, "");
    }

    const handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);

        setHeight(updatedValue);
    }

    const handleWeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);

        setWeight(updatedValue);
    }

  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input type="text" id="height" name="height" placeholder="Exemplo, 1,75"required onChange={(e) => handleHeightChange(e)}
                    value={height} />
                </div>
                <div className="form-control">
                    <label htmlFor="weigth">Peso:</label>
                    <input type="text" id="weigth" name="weigth" placeholder="Exemplo, 70.5"required onChange={(e) => handleWeightChange(e)}
                    value={weight} />
                </div>
                <div className="action-control">
                    <Button id="calc-btn" text="Calcular"  action={(e) => calcImc(e, height, weight)}/>
                        
                    <Button action={clearForm} id="clear-btn" text="Limpar" />
                    
                </div>

            </div>
        </form>

    </div>
  )
}

export default ImcCalc
