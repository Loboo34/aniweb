import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const loginUser = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save user to local storage
      //localStorage.setItem("user", JSON.stringify(json));
      localStorage.setItem("userToken", json.token);

      //update
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);

      try {
        const userResponse = await fetch(
          "http://localhost:4000/api/user/current",
          {
            headers: {
              Authorization: `Bearer  ${json.token}`,
            },
          }
        );
        const userData = await userResponse.json();
        const { username, email: userEmail } = userData;

        const updateUserData = {
          ...userData,
          username,
          email: userEmail,
        };
        dispatch({ type: "UPDATE_USER", payload: updatedUserData });
      } catch (error) {
        setError("Error fetching user data");
      }
    }
  };
  return { loginUser, isLoading, error };
};
