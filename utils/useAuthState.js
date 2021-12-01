import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isUserAuthenticated, signOutUser } from "./api";

const useAuthState = () => {
  const [authState, setAuthState] = useState(false);
  const router = useRouter();
  useEffect(() => {
    console.log("useAuthState useEffect runs");
    isUserAuthenticated().then((res) => {
      if (!res) router.push("/login");
      else setAuthState(true);
    });
  }, []);

  const handleLogout = () => {
    setAuthState(false);
    signOutUser().then((res) => {
      if (res) {
        setAuthState(false);
        router.push("/login");
      }
    });
  };

  return [authState, handleLogout];
};

export default useAuthState;
