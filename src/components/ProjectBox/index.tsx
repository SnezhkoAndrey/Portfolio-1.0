import { useContext } from "react";
import MainLayout from "@/layout/MainLayout";
import styles from "./ProjectBox.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import useTheme from "@/hooks/useTheme";
import { GlobalContext } from "@/context/GlobalContext";

interface ProjectPropsType {
  children: React.ReactNode;
  tech: string;
  linkCode: string;
  linkDemo: string;
  name: string;
}

const ProjectBox = ({
  children,
  tech,
  linkCode,
  linkDemo,
  name,
}: ProjectPropsType) => {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <MainLayout title={name}>
      <div className={addTheme(styles.projects)}>
        <div className={styles.navButtons}>
          <Link href={"/projects"}>
            <button className={`${styles.button} ${styles.backButton}`}>
              <img src="/right-arrow.png" alt="arrow" />
              <div>{t("pb_back")}</div>
            </button>
          </Link>
          <Link href={"/"}>
            <button
              className={`${styles.button} ${styles.backButton} ${styles.mainButton}`}
            >
              <div>{t("pb_main")}</div>
            </button>
          </Link>
        </div>
        <div className={addTheme(styles.project)}>
          <h2 className={styles.projectName}>{name}</h2>
          <div className={styles.linkProject}>
            <a className={addTheme(styles.link)} href={linkCode}>
              {t("pb_code")}
            </a>
            <a className={addTheme(styles.link)} href={linkDemo}>
              {t("pb_demo")}
            </a>
          </div>
          <div className={styles.details}>
            <div className={styles.detailsItem}>
              <h3 className={addTheme(styles.detailsTitle)}>{t("pb_teck")}</h3>
              <div className={addTheme(styles.detailsContent)}>{children}</div>
            </div>
            <div className={styles.detailsItem}>
              <h3 className={addTheme(styles.detailsTitle)}>{t("pb_desc")}</h3>
              <div className={addTheme(styles.detailsContent)}>{tech}</div>
            </div>
          </div>
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

export default ProjectBox;
