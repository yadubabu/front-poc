type Props = {
  title: string;
  color: string;
};
const Cards = (props: Props) => {
  return (
    <div className="cards">
      <div className="flip-card my-5" style={{ background: `${props.color}` }}>
        <div className="flip-card-inner">
          <div className="flip-card-front">{props.title}</div>
          <div
            className="flip-card-back"
            style={{ background: `${props.color}` }}
          >
            <h1 className="h6">{props.title}</h1>
            <p>We can see {props.title}</p>
            <a className="text-danger" href="/budget/savingsbudget">
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
