import { NavLink } from "react-router-dom";
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
            <p className="h6 font-bold text-gray-300 text-xs">{props.title}</p>
            <p className="h5 font-bold p-1 flex text-white md:text-sm sm:text-xs lg:flex lg:text-xl">
              <span className="mt-1 ">
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
            <div className="h6 text-xs">{props.title}</div>
            <p className="text-black">To see {props.title}</p>
            <NavLink
              className="text-white font-bold text-sm"
              to={`/budget/${props.name}`}
            >
              Click Here
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
