import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    // setting up a flex container that on smaller screens, it displays the items in a column, and on md screensizes and up, it displays a row
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* mapping over the portfolio array, which will generate an array of JSX elements based on the data in the array */}
        {portfolio.map((project) => (
          <PortfolioItem
            // my 4 props are listed below, which are extracted from the 'project' object
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
