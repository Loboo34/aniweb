import React, { createContext, useContext } from "react";
import useSWR from "swr";

// Create a context
const AnimeContext = createContext();
const baseUrl = "http://localhost:4000/api/anime";
const fetcher = (url) => fetch(url).then((res) => res.json());

// Define the fetcher function to combine multiple API calls
const fetcheAnime = async () => {
  const [upcomingResponse, popularResponse, airingResponse, genresResponse] =
    await Promise.all([
      fetch(`${baseUrl}/airing`),
      fetch(`${baseUrl}/popular`),
      fetch(`${baseUrl}/upcoming`),
      fetch(`${baseUrl}/genres`),
    ]);

  const upcoming = await upcomingResponse.json();
  const popular = await popularResponse.json();
  const airing = await airingResponse.json();
  const genres = await genresResponse.json();

  return {
    upcoming: upcoming.data,
    popular: popular.data,
    airing: airing.data,
    genres: genres.data,
  };
};

// Create a custom hook to use AnimeContext
export const useAnime = () => useContext(AnimeContext);

// Context Provider component
export const AnimeProvider = ({ children }) => {
  // Use SWR to fetch the combined API data
  const { data, error, isLoading } = useSWR("/anime/all", fetcheAnime, {
    revalidateOnFocus: true, // Re-fetch on window focus
    shouldRetryOnError: true,
    errorRetryCount: 3,
    errorRetryInterval: 5000, // Retry after 5 seconds on error
  });

  return (
    <AnimeContext.Provider
      value={{
        upcomingAnime: data?.upcoming,
        popularAnime: data?.popular,
        airingAnime: data?.airing,
        genres: data?.genres,
        isLoading,
        error,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
