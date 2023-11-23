import pokeloader from '../../img/pokeball.png';
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader">
      <img className="loader__image" src={pokeloader} alt="loader" />
      <p>Loading...</p>
    </div>
  );
}
