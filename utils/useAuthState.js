import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isUserAuthenticated } from "./api";

const useAuthState = () => {
  const [authState, setAuthState] = useState(false);
  const router = useRouter();
  useEffect(() => {
    isUserAuthenticated().then((res) => {
      if (!res) router.push("/login");
      else setAuthState(true);
    });
  }, []);
  return authState;
};

export default useAuthState;
