import { GlobalContext } from "@/context/GlobalContext";
import useTheme from "@/hooks/useTheme";
import { useContext } from "react";
import styles from "./ThemeButton.module.scss";

const ThemeButton = () => {
  const { changeTheme, theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <button className={addTheme(styles.themeButton)} onClick={changeTheme}>
      <img
        className={addTheme(styles.themeImg)}
        src={theme ? "/theme-light.png" : "/theme-dark.png"}
      />
    </button>
  );
};

export default ThemeButton;
