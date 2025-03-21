import React, { createContext, useContext, useMemo, useReducer, useState } from "react";
import useSWR from "swr";
import {useDebounce} from "../hooks/useDebounce";

const GlobalContext = createContext();
const baseUrl = "http://localhost:4000/api/anime";

// Action Types
const LOADING = "LOADING";
const GET_ALL_ANIME = "GET_ALL_ANIME";
const GET_ANIME_FAILURE = "GET_ANIME_FAILURE";

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_ALL_ANIME:
      return { ...state, ...action.payload, loading: false };
    case GET_ANIME_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const fetchWithBackoff = async (url, retries = 3, backoff = 500) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("API Error");
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying in ${backoff} ms...`);
      await new Promise((res) => setTimeout(res, backoff));
      return fetchWithBackoff(url, retries - 1, backoff * 2); // Exponential backoff
    }
    throw error;
  }
};



// Combined Fetch for All Anime Data
const fetchAllAnimeData = async (page) => {
 const limit = 25;
  const [
    airingResponse,
    popularResponse,
    upcomingResponse,
    completeResponse,
    moviesResponse,
    specialResponse,
    ovaResponse,
  ] = await Promise.all([
    fetchWithBackoff(`${baseUrl}/airing`),
    fetchWithBackoff(`${baseUrl}/popular`),
    fetchWithBackoff(`${baseUrl}/upcoming`),
    fetchWithBackoff(`${baseUrl}/complete`),
    //fetchWithBackoff(`${baseUrl}/movies`),
    //fetchWithBackoff(`${baseUrl}/special`),
    //fetchWithBackoff(`${baseUrl}/ova`),
  ]);

  return {
     airingAnime: airingResponse.data,
    popularAnime: popularResponse.data,
   upcomingAnime: upcomingResponse.data,
  completeAnime: completeResponse.data,
    // movies: moviesResponse.data,
    //special: specialResponse.data,
    //ova: ovaResponse.data,

  };
};

// GlobalProvider Component
export const GlobalProvider = ({ children }) => {
  const initialState = {
    airingAnime: [],
    popularAnime: [],
    upcomingAnime: [],
    favoriteAnime: [],
    completeAnime: [],
    movies: [],
    special: [],
    ova: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
const refresh = useDebounce(initialState, 1000);
  // Use SWR for combined fetch
  const { data, error } = useSWR("/anime/all", fetchAllAnimeData, {
    revalidateOnFocus: false, // Don't revalidate on focus
    revalidateOnReconnect: false, // Don't revalidate on reconnect
    refreshInterval: refresh, // Revalidate every 10 minutes


  });

  // Dispatch when data or error changes
  useMemo(() => {
    if (data) {
      dispatch({ type: GET_ALL_ANIME, payload: data });
    }
    if (error) {
      dispatch({ type: GET_ANIME_FAILURE, payload: error.message });
    }
  }, [data, error]);

  const contextValue = useMemo(
    () => ({
      airingAnime: state.airingAnime,
      popularAnime: state.popularAnime,
      upcomingAnime: state.upcomingAnime,
      completeAnime: state.completeAnime,
      favoriteAnime: state.favoriteAnime,
      movies: state.movies,
      special: state.special,
      ova: state.ova,
      loading: state.loading,
      error: state.error,
    }),
    [state]
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom Hook to Access Context
export const useGlobalContext = () => useContext(GlobalContext);
