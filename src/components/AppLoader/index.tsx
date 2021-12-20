import { useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import { logout } from "src/features/auth/actions";
import { loginUserToStore } from "src/features/auth/slice";
import { useAppThunkDispatch } from "src/features/store";
import { useAppSelector } from "src/HOOKS/useCustomReduxSelector";

interface AppLoaderProps {
  children: ReactNode;
}

const AppLoader = function ({ children }: AppLoaderProps) {
  const dispatch = useAppThunkDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("auth") ?? "{}");
    if (userFromLocalStorage) {
      dispatch(loginUserToStore(userFromLocalStorage));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!window) {
      return;
    }

    const userFromLocalStorage = JSON.parse(localStorage.getItem("auth") ?? "null");

    if (!userFromLocalStorage) {
      console.log("Ni ma usera");
      dispatch(logout());
    }
  }, [dispatch, router.asPath, user]);
  return <>{children}</>;
};

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default AppLoader;
