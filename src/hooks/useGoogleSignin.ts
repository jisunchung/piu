import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import supabase from "@remote/supabase";

function useGoogleSignin() {
  const navigate = useNavigate();
  const signout = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    console.log("Sign out error:", error);
    navigate("/");
  }, []);

  const signin = useCallback(async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: "http://localhost:3000/",
      },
    });

    if (error) {
      console.error("Google sign-in error:", error);
    }
  }, []);
  return { signin, signout };
}

export default useGoogleSignin;
