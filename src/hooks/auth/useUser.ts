import { useAppDispatch, useAppSelector } from "@store/hooks";
import { clearUser, setUser } from "@store/user/userSlice";

import type { User } from "@models/user";

function useUser() {
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleSetUser = (user: User) => dispatch(setUser(user));
  const handleClearUser = () => dispatch(clearUser());

  return { user, handleSetUser, handleClearUser };
}

export default useUser;
