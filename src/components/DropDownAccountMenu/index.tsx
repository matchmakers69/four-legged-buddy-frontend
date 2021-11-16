import { FC } from "react";
import Link from "next/link";
import router from "next/router";
import { useDispatch } from "react-redux";
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
      <button onClick={toggleDropDownAccountList}>Lang</button>
      {isVisible && <S.DropDownList>ff</S.DropDownList>}
    </S.MenuSwitcherWrapper>
  );
};

export default DropDownAccountMenu;
