import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "normalize.css";

import Header from "../components/Header";
import { ThemeProvider } from "styled-components";

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
    <ThemeProvider theme={{}}>{children()}</ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
