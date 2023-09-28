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
        className="flip-card my-2 mx-3 flex"
        style={{ background: `${props.color}` }}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front flex-column ">
            <p className="h6 font-bold text-black">{props.title}</p>
            <p className="h5 font-bold p-1 flex text-white">
              <span className="p-1">
                {" "}
                <FaRupeeSign />
              </span>
              {props.val}
            </p>
          </div>
          <div
            className="flip-card-back"
            style={{ background: `${props.color}` }}
          >
            <h1 className="h6">{props.title}</h1>
            <p className="text-black">
              {props.title === "Available Balance" ? "To set" : "To see"}{" "}
              {props.title}
            </p>
            <a
              className="text-white font-bold text-sm"
              href={`/budget/${props.name}`}
            >
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
