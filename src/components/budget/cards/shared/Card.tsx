import "./style.css";

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
          <div className="flip-card-front flex-column">
            <p>{props.title}</p>
            <p>{props.val}</p>
          </div>
          <div
            className="flip-card-back"
            style={{ background: `${props.color}` }}
          >
            <h1 className="h6">{props.title}</h1>
            <p>We can see {props.title}</p>
            <a className="text-danger" href={`/dashboard/budget/${props.name}`}>
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
