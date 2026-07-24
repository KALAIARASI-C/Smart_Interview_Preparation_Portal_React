import { useNavigate } from "react-router-dom";
import "../css/Coding.css";
import CodingCard from "../components/CodingCard";
import { codingCategories } from "../data/codingData";

function Coding() {

  const navigate = useNavigate();

  return (
    <div className="coding-page">

      <h1>Coding Practice</h1>

      <p>Select a programming language to start practicing.</p>

      <div className="coding-grid">

        {codingCategories.map((item) => (

          <CodingCard
            key={item.id}
            title={item.title}
            description={item.description}
            onStart={() =>
              navigate(`/coding/${item.title.toLowerCase().replace(/\s|&/g, "-")}`)
            }
          />

        ))}

      </div>

    </div>
  );
}

export default Coding;