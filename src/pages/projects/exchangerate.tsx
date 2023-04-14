import ProjectBox from "@/components/ProjectBox";
import { useTranslation } from "react-i18next";

const ExchangeRate = () => {
  const { t } = useTranslation();

  return (
    <ProjectBox
      name={t("rate_name")}
      linkCode="https://github.com/SnezhkoAndrey/Exchange-Rate"
      linkDemo="https://exchangerate-908e7.web.app"
      tech={t("rate")}
    >
      <div>React</div>
      <div>React hooks</div>
      <div>TypeScript</div>
      <div>Next JS</div>
      <div>MobX</div>
      <div>Material UI</div>
      <div>AntDesignCharts</div>
      <div>Toaster</div>
      <div>REST API</div>
    </ProjectBox>
  );
};

export default ExchangeRate;
