import "./style.css";

type Props = {
  title: string;
  color: string;
  val: string;
};
const Cards = (props: Props) => {
  const getImg = require(`../../../assets/${props.val}.png`);
  return (
    <div className="cards bg-gray-200">
      <div className="flip-cards ">
        <div className="flip-cards-inner">
          <div className="flip-cards-front  h5">
            {props.title}
            <img src={getImg} alt="" width={200} height={210} />
          </div>
          <div
            className="flip-cards-back"
            style={{ background: `${props.color}` }}
          >
            <h1 className="h6">{props.title}</h1>
            <p>We can {props.title}</p>
            <a className="text-dark" href={`/transactions/${props.val}`}>
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
