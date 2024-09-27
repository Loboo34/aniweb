import React, { createContext, useContext, useEffect, useReducer } from "react";

const GlobalContext = createContext();
const baseUrl = "http://localhost:4000/api/anime";
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_TOP_ANIME = "GET_TOP_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
const GET_COMPLETE_ANIME = "GET_COMPLETE_ANIME";
const GET_RECOMENDED_ANIME = "GET_RECOMENDED_ANIME";
const GET_GENRES = "GET_GENRES";
const GET_Genre = "GET_Genre";

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_POPULAR_ANIME:
      return { ...state, popularAnime: action.payload, loading: false };
    case GET_TOP_ANIME:
      return { ...state, topAnime: action.payload, loading: false };
    case GET_UPCOMING_ANIME:
      return { ...state, upcomingAnime: action.payload, loading: false };
    case GET_AIRING_ANIME:
      return { ...state, airingAnime: action.payload, loading: false };
    case GET_COMPLETE_ANIME:
      return { ...state, completeAnime: action.payload, loading: false };
    case GET_RECOMENDED_ANIME:
      return { ...state, recomendedAnime: action.payload, loading: false };
    case GET_GENRES:
      return { ...state, genres: action.payload, loading: false };
    case GET_Genre:
      return { ...state, genres: action.payload, loading: false };

    case SEARCH:
      return { ...state, searchResults: action.payload, isSearch: true };
    default:
      return state;
  }
};
export const GlobalProvider = ({ children }) => {
  const initialState = {
    airingAnime: [],
    popularAnime: [],
    topAnime: [],
    upcomingAnime: [],
    completeAnime: [],
    recomendedAnime: [],
    genres: [],
    genre: [],
    pictures: [],
    isSearch: false,
    searchResults: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAiringAnime = async () => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(`${baseUrl}/airing`);
      const data = await response.json();
      dispatch({ type: GET_AIRING_ANIME, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getPopularAnime = async () => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(`${baseUrl}/popular`);
      const data = await response.json();
      console.log(data.data);
      dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getUpcomingAnime = async () => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(`${baseUrl}/upcoming`);
      const data = await response.json();
      dispatch({ type: GET_UPCOMING_ANIME, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getRecomendedAnime = async () => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(`${baseUrl}/recomended`);
      const data = await response.json();
      dispatch({ type: GET_RECOMENDED_ANIME, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getGenres = async () => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(`${baseUrl}/genres`);
      const data = await response.json();
      dispatch({ type: GET_GENRES, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  }

  const getGenre = async (name) => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(`${baseUrl}/genre?name=${genre.name}`);
      const data = await response.json();
      dispatch({ type: GET_GENRES, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
   // getAiringAnime();
    getPopularAnime();
    //getUpcomingAnime();
    getRecomendedAnime();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        getAiringAnime,
        getPopularAnime,
        getUpcomingAnime,
        getRecomendedAnime,
        getGenres,
        getGenre,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
