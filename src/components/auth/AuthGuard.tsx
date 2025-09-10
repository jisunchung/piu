import { useEffect, useState } from "react";

import useUser from "@hooks/auth/useUser";
import supabase from "@remote/supabase";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { handleSetUser, handleClearUser } = useUser();
  const [initialize, setInitialize] = useState(false);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("onAuthStateChange", session);
      if (session == null) {
        handleClearUser();
      } else {
        handleSetUser({
          uid: session.user.id,
          name: session.user.user_metadata.name,
          email: session.user.email ?? "",
          photoURL: session.user.user_metadata.avatar_url ?? "",
        });
      }
      setInitialize(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (initialize === false) {
    return null;
  }

  return <>{children}</>;
}
