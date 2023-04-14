import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/styles/projects.module.scss";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import styles from "./CarouselBox.module.scss";

const CarouselBox = () => {
  const { t } = useTranslation();

  const style = {
    fontFamily: `'Arsenal', sans-serif`,
    fontSize: "18px",
    color: "#d6dff7",
    backgroundColor: "#171f26",
    width: "30%",
    marginLeft: "-15%",
    boxShadow: "4px 4px 15px rgba(0, 0, 0)",
    top: "30px",
    bottom: "auto",
  };

  const dataCarousel = [
    {
      src: "/exchangerate.png",
      href: "/projects/exchangerate",
      name: t("rate_name"),
    },
    {
      src: "/translator.png",
      href: "/projects/translator",
      name: t("translator_name"),
    },
    {
      src: "/testapp.png",
      href: "/projects/testapp",
      name: t("test_name"),
    },
    {
      src: "/weather.png",
      href: "/projects/weatherapp",
      name: t("weather_name"),
    },
    {
      src: "/todo.png",
      href: "/projects/todoapp",
      name: t("todo_name"),
    },
  ];

  return (
    <Carousel autoPlay infiniteLoop>
      {dataCarousel.map((dc) => (
        <div key={dc.name}>
          <img src={dc.src} />
          <Link href={dc.href}>
            <p
              style={style}
              className={`${styles.text} ${"legend"}`}
              title="More details"
            >
              {dc.name} →
            </p>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselBox;
