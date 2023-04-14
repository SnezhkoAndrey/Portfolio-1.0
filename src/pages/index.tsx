import { useContext } from "react";
import Modal from "@/components/Modal";
import { GlobalContext } from "@/context/GlobalContext";
import MainLayout from "@/layout/MainLayout";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import useTheme from "@/hooks/useTheme";

export default function Home() {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <MainLayout title="Snizhko Andrii - Portfolio">
      <div className={addTheme(styles.main)}>
        <div className={styles.title}>
          <img
            className={addTheme(styles.avatar)}
            src="/avatar.jpg"
            alt="avatar"
          />
          <div className={styles.desc}>
            <div className={styles.name}>
              <h1 className={addTheme(styles.nameItem)}>{t("home_name")}</h1>
              <h1 className={addTheme(styles.nameItem)}>
                {t("home_secondName")}
              </h1>
            </div>
            <h4 className={addTheme(styles.profession)}>
              {t("home_profession")}
            </h4>
            <div className={styles.socialNav}>
              <a href="https://github.com/SnezhkoAndrey" title="github">
                <img
                  src={theme ? "/github-light.png" : "/github-dark.png"}
                  alt="github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/andrii-snizhko-887785258/"
                title="linkedin"
              >
                <img
                  src={theme ? "/linkedin-light.png" : "/linkedin-dark.png"}
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        <h4 className={addTheme(styles.about)}>{t("home_desc")}</h4>
        <div className={styles.infoButtons}>
          <a href="https://www.dropbox.com/s/q3jh43wdjd6qqap/resume.pdf?dl=0">
            <button className={`${styles.button} ${styles.downloadButton}`}>
              <div className={styles.downloadButtonItem}>
                {t("home_download")}
                <img src="/Bottom Alignment-dark.png" />
              </div>
            </button>
          </a>
          <Modal>
            <h2 className={addTheme(styles.modalTitle)}>{t("home_contact")}</h2>
            <div className={styles.modalContent}>
              <div className={styles.modalItem}>
                <img src="/gmail.png" alt="email" />
                <p>andreysnezhok@gmail.com</p>
              </div>
              <div className={styles.modalItem}>
                <img src="/telephone.png" alt="telephone" />
                <p>+38 (097) 603 39 10</p>
              </div>
              <div className={styles.modalItem}>
                <img src="/telegram.png" alt="telegram" />
                <a href="https://t.me/AndriiSnizhko">Telegram</a>
              </div>
              <div className={styles.modalItem}>
                <img src="/github.png" alt="github" />
                <a href="https://github.com/SnezhkoAndrey">Github</a>
              </div>
              <div className={styles.modalItem}>
                <img src="/linkedin.png" alt="linkedin" />
                <a href="https://www.linkedin.com/in/andrii-snizhko-887785258/">
                  Linkedin
                </a>
              </div>
            </div>
          </Modal>
        </div>
        <Link href={"/projects"}>
          <button className={`${styles.button} ${styles.pageButton}`}>
            <div>{t("home_projects")}</div>
            <img src="/right-arrow.png" alt="arrow" />
          </button>
        </Link>
        <div className={addTheme(styles.skills)}>
          <h2 className={addTheme(styles.skillsTitle)}>{t("home_skills")}</h2>
          <div className={addTheme(styles.skillsItem)}>
            <div className={styles.skillsList}>
              <div className={styles.skill}>JavaSctipt ES6+</div>
              <div className={styles.skill}>React/React hooks</div>
              <div className={styles.skill}>TypeScript</div>
              <div className={styles.skill}>Next JS</div>
              <div className={styles.skill}>MobX</div>
              <div className={styles.skill}>
                Redux/Redux-toolkit/Redux-thunk
              </div>
              <div className={styles.skill}>Jest/React testing library</div>
              <div className={styles.skill}>HTML5</div>
            </div>
            <div className={addTheme(styles.line)}></div>
            <div className={styles.skillsList}>
              <div className={styles.skill}>CSS3/SASS/SCSS</div>
              <div className={styles.skill}>
                AntDesign/Material UI/Bootstrap
              </div>
              <div className={styles.skill}>REST API</div>
              <div className={styles.skill}>npm/yarn</div>
              <div className={styles.skill}>JSON</div>
              <div className={styles.skill}>OOP/functional programming</div>
              <div className={styles.skill}>
                Classes components(lifecycle methods)
              </div>
              <div className={styles.skill}>i18Next</div>
            </div>
          </div>
          <div className={addTheme(styles.otherSkills)}>
            <div className={styles.otherSkillsBlock}>
              <h2 className={addTheme(styles.otherTitle)}>{t("home_edu")}</h2>
              <div className={addTheme(styles.otherList)}>
                <div className={styles.otherItem}>{t("home_eduDesc")}</div>
                <div className={styles.otherItem}>{t("home_univ")}</div>
                <div className={styles.otherItem}>{t("home_course")}</div>
              </div>
            </div>
            <div className={styles.otherSkillsBlock}>
              <h2 className={addTheme(styles.otherTitle)}>{t("home_lang")}</h2>
              <div className={addTheme(styles.otherList)}>
                <div className={styles.otherItem}>{t("home_uk")}</div>
                <div className={styles.otherItem}>{t("home_en")}</div>
                <div className={styles.otherItem}>{t("home_ru")}</div>
              </div>
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
}
