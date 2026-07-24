import "../css/CodingCard.css";

function CodingCard({ title, description, onStart }) {
  return (
    <div className="coding-card">

      <h2>{title}</h2>

      <p>{description}</p>

      <button onClick={onStart}>
        Start Practice
      </button>

    </div>
  );
}

export default CodingCard;