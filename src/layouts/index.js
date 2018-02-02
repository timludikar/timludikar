import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "normalize.css";
import { BreakpointProvider } from "hedron";

import Header from "../components/Header";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <BreakpointProvider breakpoints={{ sm: 300, md: 568, lg: 900 }}>
      {children()}
    </BreakpointProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
