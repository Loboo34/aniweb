import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useCurrent = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const loginUser = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/user/login", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // Save user token to local storage
      localStorage.setItem("userToken", json.token); // Assuming the token is returned from the login endpoint

      // Update user authentication state
      dispatch({ type: "LOGIN", payload: json });

      // Fetch current user's data based on the token
      try {
        const userResponse = await fetch(
          "http://localhost:4000/api/user/current",
          {
            headers: {
              Authorization: `Bearer ${json.token}`, // Send the token in the Authorization header
            },
          }
        );

        const userData = await userResponse.json();

        // Update user data in the context
        dispatch({ type: "UPDATE_USER", payload: userData });
      } catch (error) {
        setError("Error fetching user data");
      }

      setIsLoading(false);
    }
  };
  return { loginUser, isLoading, error };
};
