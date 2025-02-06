// components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi';
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';

// hooks
import { useForm } from './hooks/useForm';

import './App.css'

function App() {

  const formComponents = [
    <UserForm/>,
    <ReviewForm/>,
    <Thanks/>,
  ]
  const {currentStep, currentComponent, changeStep, isLaststep, isFirstStep} = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
      <h2>Deixe sua avaliação</h2>
      <p>Ficamos felizes com a sua compra. Avalie no formulário abaixo</p>
      </div>

    <div className="form-container">
      <p>Etapas</p>
      <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <div className="inputs-container">{currentComponent}</div>
        <div className="actions">
        {!isFirstStep && (
          <button type='button' onClick={() => changeStep(currentStep - 1)}>
          <GrFormPrevious/>
          <span>Voltar</span>
        </button>
        )}
          
            {!isLaststep ? (
              <button type='submit'>
              <span>Avançar</span>
              <GrFormNext/>
              </button>
            ) : (
              <button type='button'>
              <span>Enviar</span>
            <FiSend/>
            </button>
            )}

        </div>
      </form>
    </div>
    </div>

  )
}

export default App
