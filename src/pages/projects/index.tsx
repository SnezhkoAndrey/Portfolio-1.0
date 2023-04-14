import { useContext } from "react";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import styles from "@/styles/projects.module.scss";
import CarouselBox from "@/components/CarouselBox";
import { useTranslation } from "react-i18next";
import useTheme from "@/hooks/useTheme";
import { GlobalContext } from "@/context/GlobalContext";

const Projects = () => {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <MainLayout title="Projects Page">
      <div className={addTheme(styles.projects)}>
        <Link href={"/"}>
          <button className={`${styles.button} ${styles.backButton}`}>
            <img src="/right-arrow.png" alt="arrow" />
            <div>{t("proj_back")}</div>
          </button>
        </Link>
        <div className={styles.carouselWrapper}>
          <CarouselBox />
        </div>
      </div>
      <style jsx global>{`
        body {
          background: ${theme ? "#e5e5e5" : "#0c151d"};
        }
      `}</style>
    </MainLayout>
  );
};

export default Projects;
