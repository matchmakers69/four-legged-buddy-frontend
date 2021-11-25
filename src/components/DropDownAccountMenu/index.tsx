import { FC, useState, useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import { UserIcon, CarretDown, CarretUp } from "src/assets/icons";
import Button from "src/components/common/Button";
import constants from "src/constants";
import { logout } from "src/features/auth/actions";
import { useAppThunkDispatch } from "src/features/store";
import { useAppSelector } from "src/HOOKS/useCustomReduxSelector";
import * as S from "./DropDownAccountMenu.styled";

const { LOGIN } = constants.routes;

const DropDownAccountMenu: FC = function () {
  const [isVisible, setIsVisible] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);
  const dispatch = useAppThunkDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const handleRedirectToLoginPage = () => {
    router.push(LOGIN);
  };
  const toggleDropDownAccountList = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    setIsUserLoggedIn(user);
  }, [user]);

  const logoutUser = () => {
    dispatch(logout())
      .then(unwrapResult)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        // toastify here
        console.log(error);
      });
  };

  return (
    <S.MenuSwitcherWrapper>
      <S.BtnAccountDropDown title="User Account" onClick={toggleDropDownAccountList}>
        <S.UserIconWrapper>
          <UserIcon className="user-icon" />
        </S.UserIconWrapper>
        <S.ArrowDownWrapper>
          {!isVisible ? <CarretDown className="arrow-icon" /> : <CarretUp className="arrow-icon" />}
        </S.ArrowDownWrapper>
      </S.BtnAccountDropDown>

      <S.DrowDownNav animate={isVisible ? "visible" : "hidden"}>
        <S.DropDownNavInner>
          <S.AccountDetailsTitle>User&apos;s Account</S.AccountDetailsTitle>
          <S.DropDownList>ff</S.DropDownList>
          <S.DropDownButtonList>
            {isUserLoggedIn ? (
              <li className="list-button-item">
                <Button onClick={logoutUser} fullWidth className="btn--logout" type="button" variant="filled">
                  Logout
                </Button>
              </li>
            ) : (
              <li className="list-button-item">
                <Button
                  onClick={handleRedirectToLoginPage}
                  fullWidth
                  className="btn--login"
                  type="button"
                  variant="filled"
                >
                  Login
                </Button>
              </li>
            )}
          </S.DropDownButtonList>
        </S.DropDownNavInner>
      </S.DrowDownNav>
    </S.MenuSwitcherWrapper>
  );
};

export default DropDownAccountMenu;
