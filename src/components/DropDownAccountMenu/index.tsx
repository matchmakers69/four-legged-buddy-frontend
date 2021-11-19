import { FC, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { UserIcon, CarretDown, CarretUp } from "src/assets/icons";
import Button from "src/components/common/Button";
import constants from "src/constants";
import { useAppSelector } from "src/HOOKS/useCustomReduxSelector";
import { logout } from "src/store/auth/actions";
import * as S from "./DropDownAccountMenu.styled";

const { LOGIN } = constants.routes;

const DropDownAccountMenu: FC = function () {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.users);
  const router = useRouter();
  const handleRedirectToLoginPage = () => {
    router.push(LOGIN);
  };
  const toggleDropDownAccountList = () => {
    setIsVisible(!isVisible);
  };

  const logoutUser = async () => {
    dispatch(logout())
      .then(unwrapResult)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
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
            {isAuthenticated ? (
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
