import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import useTheme from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguagesSelector.module.scss";

const LanguagesSelector = () => {
  const { i18n } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  const [language, setLanguage] = useState("en");

  const handleChange = (event: any) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <select onChange={handleChange} className={addTheme(styles.select)}>
      <option className={addTheme(styles.option)} value="en">
        English
      </option>
      <option className={addTheme(styles.option)} value="uk">
        Українська
      </option>
    </select>
  );
};

export default LanguagesSelector;
