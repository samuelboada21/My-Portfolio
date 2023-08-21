import { useContext } from "react";
import { AppContext } from "../components/context/AppProvider";
import Page from "../components/container/Page";
import ProjectsBody from "../components/pure/ProjectsBody";


export default function ProjectsPage(){
  const {change, open} = useContext(AppContext);
  return(
    <Page changeOpen={change} isOpen={open} componente={<ProjectsBody/>} msg={"Projects"}/>
  )
}