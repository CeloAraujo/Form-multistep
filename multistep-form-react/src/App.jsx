import { useState } from "react";
import "./App.css";
// components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

// hooks
import { useForm } from "./hooks/useForm";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const {currentStep, currentComponent} = useForm(formComponents)

  return (
    <>
      <div className="app">
        <div className="header">
          <h2>Deixe sua avaliação</h2>
          <p>
            Ficamos felizes com sua compra. Utilize o formulário abaixo para
            avaliar o produto.
          </p>
        </div>
        <div className="form-container">
          <p>etapas</p>
          <form>
            <div className="inputs-container">{currentComponent}</div>
            <div className="action">
              <button type="button">
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
