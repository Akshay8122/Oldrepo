import React from "react";
import "../pages/Character.css";
import { useCharacter } from "../hooks/useCharacter";
import { Navigate, useParams } from "react-router-dom";

export default function Character() {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);

  console.log({ error, data, loading });

  if (error) return <div>Something went wrong</div>;

  if (loading) return <div>Spinner</div>;

  return (
    <div>
      {!data.character ? (
        <div>
          {alert(`id doesn't exits`)}
          <Navigate to="/" />
        </div>
      ) : (
        <div className="Character">
          <img src={data.character.image} width={500} height={1000} alt="" />
          <div className="Character-content">
            <h1>{data.character.name}</h1>
            <div className="Character-episode">
              {data?.character?.episode.map((episode) => {
                return (
                  <div key={episode.episode}>
                    {episode.name}- <b>{episode.episode}</b>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
