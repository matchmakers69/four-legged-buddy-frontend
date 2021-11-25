import { VFC, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import { isLoggedIn } from "src/features/auth/actions";
import { useAppThunkDispatch } from "src/features/store";

interface IAppLoader {
  children: ReactNode;
}

const AppLoader: VFC<IAppLoader> = function ({ children }) {
  // const dispatch = useAppThunkDispatch();
  // const router = useRouter();

  // useEffect(() => {
  //   console.log("hello");
  //   const checkUserLoggedIn = async () => {
  //     await dispatch(isLoggedIn());
  //   };

  //   checkUserLoggedIn();
  // }, [dispatch, router.asPath]);
  return <>{children}</>;
};

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default AppLoader;
