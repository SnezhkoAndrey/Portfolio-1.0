import ProjectBox from "@/components/ProjectBox";
import { useTranslation } from "react-i18next";

const TestApp = () => {
  const { t } = useTranslation();

  return (
    <ProjectBox
      name={t("test_name")}
      linkCode="https://github.com/SnezhkoAndrey/Test-app"
      linkDemo="https://snezhkoandrey.github.io/Test-app/"
      tech={t("test")}
    >
      <div>React</div>
      <div>React hooks</div>
      <div>TypeScript</div>
      <div>Redux Toolkit</div>
      <div>Redux Thunk</div>
      <div>Material UI</div>
      <div>REST API</div>
      <div>React hook form</div>
      <div>i18Next</div>
      <div>Toaster</div>
      <div>LocalStorage</div>
    </ProjectBox>
  );
};

export default TestApp;
