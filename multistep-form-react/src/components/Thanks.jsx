import "./Thanks.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const dataEmoji = {
  unsatisfied: <BsFillEmojiFrownFill />,
  satisfied: <BsFillEmojiSmileFill />,
  neutral: <BsFillEmojiNeutralFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        Sua opinião é muito importante,avalie e ganhe benefícios na próxima
        compra.
      </p>
      <h3>Resumo da avaliação: {data.name}</h3>
      <p className="review-data">
        <span>Satisfação:</span>
        {dataEmoji[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
