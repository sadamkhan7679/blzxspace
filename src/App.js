import React from "react";
// import loadable from "@loadable/component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewHeader from "./components/Newheader.js";
import "./App.css";
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import HeaderTwo from "components/HeaderTwo/HeaderTwo.js";
import Donate from "pages/Donate/Donate.js";
import EmailSubscription from "./components/forms/EmailSubscription";

import ThreeColSlider from "./components/cards/Slider";
// const ThreeColSlider = loadable(() => import("./components/cards/Slider"));
import FiveColumnDark from "./components/footers/FiveColumnDark";
// const FiveColumnDark = loadable(() =>
//   import("./components/footers/FiveColumnDark")
// );
import CompanyDetails from "./pages/CompanyDetails";
// const CompanyDetails = loadable(() => import("./pages/CompanyDetails"));
import Search from "./pages/Search";
// const Search = loadable(() => import("./pages/Search"));
import About from "./pages/About";
// const About = loadable(() => import("./pages/About"));
import Contact from "./components/forms/Contact";
// const Contact = loadable(() => import("./components/forms/Contact"));
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/company/:id" component={CompanyDetails} />
        <Route exact path="/">
          <NewHeader />
          <ThreeColSlider />
          <FiveColumnDark />
        </Route>
        <Route path="/signup">
          <HeaderTwo />
          <EmailSubscription />
          <FiveColumnDark />
        </Route>
        <Route path="/contact">
          <HeaderTwo />
          <Contact />
          <FiveColumnDark />
        </Route>
        <Route path="/about">
          {/* <HeaderTwo/> */}
          <About />
          <FiveColumnDark />
        </Route>
        <Route path="/donate">
          {/* <HeaderTwo/> */}
          <Donate />
          <FiveColumnDark />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
