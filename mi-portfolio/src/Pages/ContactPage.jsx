import { useContext } from "react";
import { AppContext } from "../components/context/AppProvider";
import Page from "../components/container/Page";
import ContactBody from "../components/pure/ContactBody";

export default function ContactPage() {
  const { change, open } = useContext(AppContext);
  return (
    <Page
      changeOpen={change}
      isOpen={open}
      componente={<ContactBody />}
      msg={"Contact"}
    />
  );
}
