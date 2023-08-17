import { Redirect, Router, Switch, Route } from "wouter";
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from "../components/NavBar";
import HomePage from "../Pages/HomePage";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";

export default function AppRouter() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <NavBar />
          <Switch>
            <Redirect path="/home" to="/" />
            <Route path="/" component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </ChakraProvider>
    </>
  );
}