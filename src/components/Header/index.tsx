import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import LanguagesSelector from "./components/LanguagesSelector";
import ThemeButton from "./components/ThemeButton";
import styles from "./Header.module.scss";
import useTheme from "@/hooks/useTheme";

interface HeaderPropsType {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderPropsType) => {
  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <>
      <div className={addTheme(styles.header)}>
        <ThemeButton />
        <LanguagesSelector />
      </div>
      {children}
    </>
  );
};

export default Header;
