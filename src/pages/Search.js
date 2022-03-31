import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          id
          name
        }
      }
    }
  }
`;

export const Search = () => {
  const [name, setName] = useState("");

  const [getLoacations, { error, loading, data }] = useLazyQuery(
    GET_CHARACTER_LOCATION
  );

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLoacations({ variables: { name } })}>
        Search
      </button>
      {error && <div>Something went wong.......</div>}
      {loading && <div>Loading...........</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return (
              <li key={character.location.id}>{character.location.name}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
