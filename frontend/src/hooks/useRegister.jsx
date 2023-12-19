import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  
  const registerUser = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    //const json = await response.json();
try {
  const json = await response.json();

  if (!response.ok) {
    setIsLoading(false);
    setError(json.error || "Something went wrong");
  }
  if (!response.ok) {
    setIsLoading(false);
    setError(json.error);
  }
  if (response.ok) {
    //save user to local storage
    localStorage.setItem("user", JSON.stringify(json));

    //update
    dispatch({ type: "LOGIN", payload: json });
    setIsLoading(false);
  }
} catch (error) {
  // Catch any JSON parsing errors
  setError("Error parsing response");
}
  };
  return { registerUser, isLoading, error };
};
