import "./style.css";
import { FaRupeeSign } from "react-icons/fa";

type Props = {
  val: number;
  title: string;
  color: string;
  name: string;
};
const Cards = (props: Props) => {
  return (
    <div className="cards">
      <div
        className="flip-card my-2 d-flex"
        style={{ background: `${props.color}` }}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front flex-column ">
            <p className="h6 font-bold text-black">{props.title}</p>
            <p className="h5 font-bold p-1 flex text-indigo-100">
              <FaRupeeSign />
              {props.val}
            </p>
          </div>
          <div
            className="flip-card-back"
            style={{ background: `${props.color}` }}
          >
            <h1 className="h6">{props.title}</h1>
            <p className="text-black">We can see {props.title}</p>
            <a className="text-black" href={`/budget/${props.name}`}>
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
