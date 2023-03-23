import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as BackArrow } from "../../assets/BackArrow.svg";
import LoadingAnimationComponent from "../LoadingAnimationComponent/LoadingAnimationComponent";
import { Link } from "react-router-dom";
import "./CharacterDescription.css";

function CharacterDescription() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      <Link className='goBack' to='/'>
        <BackArrow className='img'></BackArrow>
        <p>GO BACK</p>
      </Link>
      <div className='character-description-container'>
        {character ? (
          <div className='card-description'>
            <img
              className='card-description-image'
              src={character.image}
              alt={character.name}
            />
            <h1 className='title'>{character.name}</h1>
            <p className='info'>Informations</p>
            <ul className='info-container'>
              <li className='label'>Gender</li>
              <li className='description'>{character.gender}</li>
              <hr></hr>
              <li className='label'>Status</li>
              <li className='description'>{character.status}</li>
              <hr></hr>
              <li className='label'>Specie</li>
              <li className='description'>{character.species}</li>
              <hr></hr>
              <li className='label'>Origin</li>
              <li className='description'>{character.origin.name}</li>
              {character.type && (
                <>
                  <hr></hr>
                  <li className='label'>Type</li>
                  <li className='description'>{character.type}</li>
                </>
              )}
            </ul>
          </div>
        ) : (
          <LoadingAnimationComponent />
        )}
      </div>
    </>
  );
}

export default CharacterDescription;
