import { Link } from "react-router-dom";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  return (
    <div className='character-card'>
      <Link to={`/character/${character.id}`}>
        <img className="card-image" src={character.image} alt={character.name} />
        <p className='card-name'>{character.name}</p>
        <p className='card-specie'>{character.species}</p>
      </Link>
    </div>
  );
};

export default CharacterCard;
