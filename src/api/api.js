import axios from "axios";
import { useQuery } from "react-query";

const RickApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

const getCharacters = async (page) => {
  const response = await RickApi.get(`/character/?page=${page}`);
  return response.data.results;
};

export const useCharacterList = (page) => {
  return useQuery(["characters", page], () => getCharacters(page), {
    keepPreviousData: true,
  });
};
