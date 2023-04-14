import ProjectBox from "@/components/ProjectBox";
import { useTranslation } from "react-i18next";

const Translator = () => {
  const { t } = useTranslation();

  return (
    <ProjectBox
      name={t("translator_name")}
      linkCode="https://github.com/SnezhkoAndrey/Translator"
      linkDemo="https://translator-c82ae.web.app"
      tech={t("translator")}
    >
      <div>React</div>
      <div>React hooks</div>
      <div>TypeScript</div>
      <div>Context</div>
      <div> React hook form</div>
      <div>Material UI</div>
      <div>Toaster</div>
      <div>REST API</div>
      <div>Jest</div>
    </ProjectBox>
  );
};

export default Translator;
