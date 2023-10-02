import React from "react";

// this component accepts the 4 props mentioned below (see portfolio.js file) which will customize and display the portfolio item's content
function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank" // opens link in new tab
      rel="noopener noreferrer" // prevents potential window manipulation by the linked page
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-60 md:h-72 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {/* mapping over the 'stack' prop, which is an array of technologies used in the portfolio item; for each 'item', it creates a 'span' element */}
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
