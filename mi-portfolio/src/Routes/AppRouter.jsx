import { Redirect, Router, Switch, Route } from "wouter";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ProjectsPage from "../Pages/ProjectsPage";
import ContactPage from "../Pages/ContactPage";
import SideBar from "../components/SideBar";
import ErrorPage from "../Pages/ErrorPage";

export default function AppRouter() {
  return (
    <>
      <ChakraProvider>
        <Router>
          {/* <SideBar/> */}
          <Switch>
            <Redirect path="/home" to="/" />
            <Route path="/">
              {
                <>
                  <SideBar />
                  <HomePage />
                </>
              }
            </Route>
            <Route path="/about">
              {
                <>
                  <SideBar />
                  <AboutPage />
                </>
              }{" "}
            </Route>
            <Route path="/projects">
              {
                <>
                  <SideBar />
                  <ProjectsPage />
                </>
              }{" "}
            </Route>
            <Route path="/contact">
              {
                <>
                  <SideBar />
                  <ContactPage />
                </>
              }{" "}
            </Route>
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </ChakraProvider>
    </>
  );
}
