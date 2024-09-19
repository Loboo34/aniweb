import React, { createContext, useContext, useEffect, useReducer } from "react";

const GlobalContext = createContext();
const baseUrl = "https://api.jikan.moe/v4";
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_TOP_ANIME = "GET_TOP_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
const GET_COMPLETE_ANIME = "GET_COMPLETE_ANIME";

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
    pictures: [],
    isSearch: false,
    searchResults: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAiringAnime = async () => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(`${baseUrl}/top/anime?filter=airing`);
      const data = await response.json();
      dispatch({ type: GET_AIRING_ANIME, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getPopularAnime = async () => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
      const data = await response.json();
      console.log(data.data);
      dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getCompleteAnime = async () => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(`${baseUrl}/top/anime?filter=completed`);
      const data = await response.json();
      console.log(data.data);
      dispatch({ type: GET_COMPLETE_ANIME, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getTopAnime = async () => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(`${baseUrl}/top/anime`);
      const data = await response.json();
      dispatch({ type: GET_TOP_ANIME, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getUpcomingAnime = async () => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch(`${baseUrl}/top/anime?filter=upcoming`);
      const data = await response.json();
      dispatch({ type: GET_UPCOMING_ANIME, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   // getAiringAnime();
    getPopularAnime();
  }, []);
  return (
    <GlobalContext.Provider
      value={{ ...state, getAiringAnime, getCompleteAnime, getPopularAnime }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
