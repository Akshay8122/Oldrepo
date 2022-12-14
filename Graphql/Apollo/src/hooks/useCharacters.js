import { useQuery, gql } from "@apollo/client";

const GET_ALL_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharacters = () => {
  const { error, data, loading } = useQuery(GET_ALL_CHARACTERS);

  return {
    error,
    data,
    loading,
  };
};
