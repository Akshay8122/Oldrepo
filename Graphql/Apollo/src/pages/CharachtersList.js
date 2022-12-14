import React from "react";
import "../pages/CharactersList.css";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

export default function CharactersList() {
  const { error, data, loading } = useCharacters();

  if (loading) return <div>...Loading</div>;
  if (error) return <div>Something went wrong</div>;
  // console.log(first)
  return (
    <div className="CharachterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <div>
              <img src={character.image} alt="RickandMorty" />
              <h2>{character.name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
