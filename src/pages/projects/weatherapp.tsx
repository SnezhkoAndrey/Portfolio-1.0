import ProjectBox from "@/components/ProjectBox";
import { useTranslation } from "react-i18next";

const WeatherApp = () => {
  const { t } = useTranslation();

  return (
    <ProjectBox
      name={t("weather_name")}
      linkCode="https://github.com/SnezhkoAndrey/Weather-App"
      linkDemo="https://weather-app-1a6ac.web.app"
      tech={t("weather")}
    >
      <div>React</div>
      <div>React hooks</div>
      <div>TypeScript</div>
      <div>Redux Toolkit</div>
      <div>Redux Thunk</div>
      <div>REST API</div>
      <div>Toaster</div>
    </ProjectBox>
  );
};

export default WeatherApp;
