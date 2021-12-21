import React, { Component } from "react";
import Link from "next/link";
import shortid from "shortid";
import routeConfigs from "./routeConfigs";
import MainPage from "../pages/main/MainPage";

export const REDIRECT_PATH = "/";

class PageRouter extends Component {
  render() {
    return (
      <div>
        {routeConfigs.map(({ component: Component, path, title }) => (
          <Link key={shortid.generate()} href={path}>
            <a>{title}</a>
          </Link>
        ))}
        <MainPage />
      </div>
    );
  }
}

export default PageRouter;
