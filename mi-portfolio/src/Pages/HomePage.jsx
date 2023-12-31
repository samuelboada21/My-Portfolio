import { useContext } from "react";
import Page from "../components/container/Page";
import { AppContext } from "../components/context/AppProvider";
import HomeBody from "../components/pure/HomeBody";

export default function HomePage() {
  const { change, open } = useContext(AppContext);
  return (
    <Page
      changeOpen={change}
      isOpen={open}
      componente={<HomeBody />}
      msg={"Bienvenidos"}
    />
  );
}
