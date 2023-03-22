import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <div className='character-card'>
      <Link to={`/character/${character.id}`}>
        <img src={character.image} alt={character.name} />
      </Link>
      <h2>{character.name}</h2>
      <p>{character.species}</p>
    </div>
  );
};

export default CharacterCard;
