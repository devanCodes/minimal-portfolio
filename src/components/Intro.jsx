import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Devan
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Front-End React Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Hi, I'm Devan Hailey, a self-taught Front-End React Developer with a
        passion for creating high-quality web applications. My goal is to create
        seamless digital experiences that not only meet users' needs, but also
        leave them inspired and engaged. Below are my personal projects, a
        timeline of my journey to and in Software Development, and a contact
        form if you'd like to reach out! Also, feel free to check out my{" "}
        {/* links to my resume and Github and LinkedIn profiles */}
        <a
          href="https://drive.google.com/file/d/10F6xXV5UdBmaHbyyotoYC8p4YIoYUPTO/view?usp=drive_link"
          target="_blank" // if user selects link, it will open up the link in a new tab instead of redirecting them to the location in the same tab
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener" // this is often used in links when you want to enhance privacy and security by preventing the linked page from knowing the referring page's URL (noreferrer) and from having access to the window object of the referring page (noopener)
        >
          {" "}
          Resume
        </a>{" "}
        as well as my{" "}
        <a
          href="https://github.com/devanCodes"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          Github
        </a>{" "}
        and{" "}
        <a
          href="https://linkedin.com/in/devan-hailey"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          {" "}
          LinkedIn
        </a>{" "}
        profiles!
      </p>
    </div>
  );
}

export default Intro;
