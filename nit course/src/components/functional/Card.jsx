import "./card.css";
const Card = (props) => {
  const { url, title, job } = props;

  return (
    <div className="card">
      <img src={url} alt="Nesto" />
      <p className="title">{title}</p>
      <p>{job}</p>
    </div>
  );
};
export default Card;
