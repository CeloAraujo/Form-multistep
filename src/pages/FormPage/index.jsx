// components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "../../components/UserForm";
import ReviewForm from "../../components/ReviewForm";
import Thanks from "../../components/Thanks";
import Steps from "../../components/Steps";

// hooks
import { useForm } from "../../hooks/useForm";
import { useState, useMemo } from "react";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function FormPage() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = useMemo(() => {
    return [
      // eslint-disable-next-line react/jsx-key
      <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
      // eslint-disable-next-line react/jsx-key
      <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
      // eslint-disable-next-line react/jsx-key
      <Thanks data={data} />,
    ];
  }, [data]);

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

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
          <Steps currentStep={currentStep} />
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="action">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )}
              {!isLastStep ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button type="button">
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormPage;
