import "./Thanks.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const Thanks = () => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        Sua opinião é muito importante,avalie e ganhe benefícios na próxima
        compra.
      </p>
      <h3>Resumo da avaliação:</h3>
      <p className="review-data">
        <span>Satisfação:</span>
      </p>
      <p className="review-data">
        <span>Comentário:</span>
      </p>
    </div>
  );
};

export default Thanks;
