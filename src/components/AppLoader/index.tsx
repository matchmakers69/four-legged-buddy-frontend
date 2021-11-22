import { VFC, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import { isLoggedIn } from "src/store/auth/actions";
import { useAppThunkDispatch } from "src/store/store";

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

export async function getServerSideProps(context) {
  console.log(context);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default AppLoader;
