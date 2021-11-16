import { FC } from "react";
import Link from "next/link";
import router from "next/router";
import { useDispatch } from "react-redux";
import { UserIcon, CarretDown } from "src/assets/icons";
import Button from "src/components/common/Button";
import { useAppSelector } from "src/HOOKS/useCustomReduxSelector";
import { toggleIsVisible } from "src/store/ui/ui.reducer";
import * as S from "./DropDownAccountMenu.styled";

const DropDownAccountMenu: FC = function () {
  const { isVisible } = useAppSelector((state) => state.ui);
  const dispatch = useDispatch();
  const toggleDropDownAccountList = () => {
    dispatch(toggleIsVisible());
  };
  return (
    <S.MenuSwitcherWrapper>
      <S.BtnAccountDropDown title="User Account" onClick={toggleDropDownAccountList}>
        <S.UserIconWrapper>
          <UserIcon className="user-icon" />
        </S.UserIconWrapper>
        <S.ArrowDownWrapper>
          <CarretDown className="arrow-down" />
        </S.ArrowDownWrapper>
      </S.BtnAccountDropDown>
      {isVisible && (
        <S.DrowDownNav>
          <S.DropDownNavInner>
            <S.AccountDetailsTitle>User&apos;s Account</S.AccountDetailsTitle>
            <S.DropDownList>ff</S.DropDownList>
            <S.DropDownButtonList>
              <li className="list-button-item">
                <Button fullWidth className="btn--login" type="button" variant="filled">
                  Login
                </Button>
              </li>
              <li className="list-button-item">
                <Button fullWidth className="btn--logout" type="button" variant="filled">
                  Logout
                </Button>
              </li>
            </S.DropDownButtonList>
          </S.DropDownNavInner>
        </S.DrowDownNav>
      )}
    </S.MenuSwitcherWrapper>
  );
};

export default DropDownAccountMenu;
