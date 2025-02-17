// Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import UserForm from "./components/UserForm.tsx"
import ReviewForm from "./components/ReviewForm.tsx"
import Thanks from "./components/Thanks.tsx"
import Steps from './components/Steps.tsx'

import { FiSend } from 'react-icons/fi'


// Hooks
import { useState } from 'react'
import { useForm } from './hooks/useForm.tsx'

// CSS


import './App.css'

type FormFields = {
  name: string,
  email: string,
  review: string,
  comment: string
}

const formTemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return {...prev, [key]: value};
    })

  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <Thanks data={data}/>
  ]

 const {currentStep, currentComponent, changeStep, isLastStep} = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto.
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious /><span>Voltar</span></button>
            {!isLastStep ? (<button type='submit'><span>Avançar</span>
              <GrFormNext /></button>) : (<button type='submit'><span>Enviar</span>
                <FiSend /></button>)}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
