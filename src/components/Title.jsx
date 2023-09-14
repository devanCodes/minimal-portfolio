import React from "react";

// component is used to render a title with optional 'id' and 'children' props; the 'children' prop represents the content of the title, and the 'id' prop is used to set the HTML 'id' attribute of the title element
function Title({ children, id }) {
  return (
    <h1
      // 'id' attribute is conditionally set based on the presence of the 'id' prop, and it is used to idnetify the title element in the HTML doc; the 'children' prop is used to display the content of the title
      id={id && id}
      className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white"
    >
      {children}
    </h1>
  );
}

export default Title;
