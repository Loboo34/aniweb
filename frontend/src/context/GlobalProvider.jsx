import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

import useSWR from "swr";

const GlobalContext = createContext();
const baseUrl = "http://localhost:4000/api/anime";
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_TOP_ANIME = "GET_TOP_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
const GET_FAVORITE_ANIME = "GET_FAVORITE_ANIME";
const GET_RECOMENDED_ANIME = "GET_RECOMENDED_ANIME";
const GET_GENRES = "GET_GENRES";
const GET_Genre = "GET_Genre";
const GET_ALL_ANIME = "GET_ALL_ANIME";

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
    case GET_FAVORITE_ANIME:
      return { ...state, favoriteAnime: action.payload, loading: false };
    case GET_RECOMENDED_ANIME:
      return { ...state, recomendedAnime: action.payload, loading: false };
    case GET_GENRES:
      return { ...state, genres: action.payload, loading: false };
    case GET_Genre:
      return { ...state, genres: action.payload, loading: false };
    case GET_ALL_ANIME:
      return { ...state, allAnime: action.payload, loading: false };

    case SEARCH:
      return { ...state, searchResults: action.payload, isSearch: true };
    default:
      return state;
  }
};

const fetchAllAnimeData = async () => {
  const [airingResponse, popularResponse, upcomingResponse, favoriteResponse] = await Promise.all([
    fetch(`${baseUrl}/airing`),
    fetch(`${baseUrl}/popular`),
    // fetch(`${baseUrl}/top`),
    fetch(`${baseUrl}/upcoming`),
    fetch(`${baseUrl}/favorite`),
    // fetch(`${baseUrl}/recomended`),
    //fetch(`${baseUrl}/genres`),
  ]);

  const airing = await airingResponse.json();
  const popular = await popularResponse.json();
  const upcoming = await upcomingResponse.json();
  const favorite = await favoriteResponse.json();
  //const recomendedData = await recomended.json();
 // const genresData = await genres.json();
  return {
    airing: airing.data,
    popular: popular.data,
    upcoming: upcoming.data,
    favorite: favorite.data,
    //genresData,
  };
};

export const GlobalProvider = ({ children }) => {
  // const initialState = {
  //   airingAnime: [],
  //   popularAnime: [],
  //   topAnime: [],
  //   upcomingAnime: [],
  //   favoriteAnime: [],
  //   recomendedAnime: [],
  //   genres: [],
  //   genre: [],
  //   pictures: [],
  //   isSearch: false,
  //   searchResults: [],
  //   loading: false,
  // };
  //const [state, dispatch] = useReducer(reducer, initialState);

  const { data, error } = useSWR("anime/all", fetchAllAnimeData, {
    revalidateOnFocus: true, // Re-fetch on window focus
    shouldRetryOnError: true,
    errorRetryCount: 3,
    errorRetryInterval: 5000, // Retry after 5 seconds on error
  });

  return (
    <GlobalContext.Provider
      value={{
       // ...state,
        airingAnime: data?.airing,
        popularAnime: data?.popular,
        upcomingAnime: data?.upcoming,
        favoriteAnime: data?.favorite,
        //recomendedAnime: data?.recomended,
        //genres: data?.genres,
        //genre: data?.genre,
        //pictures: data?.pictures,
        //searchResults: data?.searchResults,
        //isSearch: data?.isSearch,
        //loading: data?.loading,
      
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// useEffect(() => {
//   const controller = new AbortController();
//   const getAiringAnime = async () => {
//     try {
//       dispatch({ type: LOADING });
//       const response = await fetch(`${baseUrl}/airing`, {
//         signal: controller.signal,
//       });
//       const data = await response.json();
//       dispatch({ type: GET_AIRING_ANIME, payload: data.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   getAiringAnime();
// }, []);

// useEffect(() => {
//   const getPopularAnime = async () => {
//     try {
//       dispatch({ type: LOADING });
//       const response = await fetch(`${baseUrl}/popular`);
//       const data = await response.json();
//       dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getPopularAnime();
// }, []);

// useEffect(() => {
//   const getTopAnime = async () => {
//     try {
//       dispatch({ type: LOADING });
//       const response = await fetch(`${baseUrl}/top`);
//       const data = await response.json();
//       dispatch({ type: GET_TOP_ANIME, payload: data.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getTopAnime();
// }, []);
//favorite
// useEffect(() => {
//   const getFavoriteAnime = async () => {
//     try {
//       dispatch({ type: LOADING });
//       const response = await fetch(`${baseUrl}/favorite`);
//       const data = await response.json();
//       dispatch({ type: GET_FAVORITE_ANIME, payload: data.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getFavoriteAnime();
// }, []);

// const getRecomendedAnime = async () => {
//   try {
//     dispatch({ type: LOADING });
//     const response = await fetch(`${baseUrl}/recomended`);
//     const data = await response.json();
//     dispatch({ type: GET_RECOMENDED_ANIME, payload: data.data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getGenres = async () => {
//   try {
//     dispatch({ type: LOADING });
//     const response = await fetch(`${baseUrl}/genres`);
//     const data = await response.json();
//     dispatch({ type: GET_GENRES, payload: data.data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getGenre = async (name) => {
//   try {
//     dispatch({ type: LOADING });
//     const response = await fetch(`${baseUrl}/genre?name=${genre.name}`);
//     const data = await response.json();
//     dispatch({ type: GET_GENRES, payload: data.data });
//   } catch (error) {
//     console.log(error);
//   }
// };
