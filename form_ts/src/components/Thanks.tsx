import "./Thanks.css"
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

type ThanksProps = {
  data: {
    name: string,
    review: string,
    comment: string
  }
}

type emojiObject = {
  unsatisfied: SVGRectElement;
  neutral: SVGRectElement;
  satisfied: SVGRectElement;
  very_satisfied: SVGRectElement;
}
const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>,
}

const Thanks = ({data}: ThanksProps) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a próxima compra.</p>
      <p>Para concluir a sua avaliação, clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação, {data.name}</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review as keyof typeof emojiData]}
      </p>
      <p className="review-data">
        <span>Comentário: </span> {data.comment}
      </p>
    </div>
  )
}

export default Thanks
