import { FC } from "react";
import Link from "next/link";
import router from "next/router";
import { useDispatch } from "react-redux";
import { useAppSelector } from "src/HOOKS/useCustomReduxSelector";
import { toggleIsVisible } from "src/store/ui/ui.reducer";
import * as S from "./LanguageSwitcherMenu.styled";

interface ILanguageSwitcherMenuProps {
  locales: string[];
}

const LanguageSwitcherMenu: FC<ILanguageSwitcherMenuProps> = ({ locales }) => {
  const { isVisible } = useAppSelector((state) => state.UIState);
  const dispatch = useDispatch();
  const toggleLanguageList = () => {
    dispatch(toggleIsVisible());
  };
  return (
    <S.MenuSwitcherWrapper>
      <button onClick={toggleLanguageList}>Lang</button>
      {isVisible && (
        <S.LanguageList>
          {locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale} passHref>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </S.LanguageList>
      )}
    </S.MenuSwitcherWrapper>
  );
};

export default LanguageSwitcherMenu;
