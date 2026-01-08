import React from "react";
import "./livretter.css";

type LivretterProps = {
  retter: string[];
};

const Livretter: React.FC<LivretterProps> = ({ retter }) => {
  return (
    <div className="livretter">
      <h2>Mine livretter</h2>
      <ul>
        {retter.map((ret, idx) => (
          <li key={idx}>{ret}</li>
        ))}
      </ul>
    </div>
  );
};

const LivretterSide: React.FC = () => {
  const mineLivretter = [
    "Lasagne",
    "Sushi",
    "Stegt flæsk med persillesovs",
    "Tacos",
    "Butter chicken",
  ];

  return <Livretter retter={mineLivretter} />;
};

export default LivretterSide;
