import ProjectBox from "@/components/ProjectBox";
import { useTranslation } from "react-i18next";

const ToDo = () => {
  const { t } = useTranslation();

  return (
    <ProjectBox
      name={t("todo_name")}
      linkCode="https://github.com/SnezhkoAndrey/ToDo"
      linkDemo="https://todo-application-c9530.web.app"
      tech={t("todo")}
    >
      <div>React</div>
      <div>React hooks</div>
      <div>TypeScript</div>
      <div>Context</div>
      <div>LocalStorage</div>
    </ProjectBox>
  );
};

export default ToDo;
