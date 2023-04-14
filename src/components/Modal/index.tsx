import { useEffect, useRef, useState, useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import useTheme from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import styles from "./Modal.module.scss";

interface ModalPropsType {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalPropsType) => {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  const [openModal, setOpenModal] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    const clickOutsideContent = (e: any) => {
      if (e.target === modalRef.current) {
        setOpenModal(false);
      }
    };
    window.addEventListener("click", clickOutsideContent);

    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, [openModal]);
  return (
    <div>
      <button
        className={styles.button}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        {t("modal_contact")}
      </button>
      <div
        ref={modalRef}
        className={`${styles.modal} ${openModal ? styles.active : ""}`}
      >
        <div className={addTheme(styles.modal__content)}>
          {children}
          <button
            className={`${styles.button} ${styles.closeModalButton}`}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            {t("modal_close")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
