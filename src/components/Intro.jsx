import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Devan
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Incidunt nobis quaerat nulla libero eaque accusamus
        beatae molestias fugiat aperiam temporibus.{" "}
        <a
          href="https://drive.google.com/file/d/1cBn5ZUf_RTGMXx6VmT7LVTeb5Fh-5hqM/view?usp=sharing"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          {" "}
          Resume
        </a>{" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nulla
        rem dolorem eligendi, harum inventore modi cum officia id laudantium
        adipisci sint ducimus repellat earum unde est cupiditate. Aperiam, a.{" "}
        <a
          href="https://github.com/devanCodes"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          {" "}
          Github
        </a>{" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        expedita neque? Repellendus iste excepturi doloremque. Ea cupiditate
        deserunt iusto repudiandae voluptate distinctio aut, ab quas dolorem
        illum. Exercitationem, alias quos.{" "}
        <a
          href="https://linkedin.com/in/devan-hailey"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          {" "}
          LinkedIn
        </a>{" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestias,
        soluta itaque rerum atque consectetur accusantium id natus velit
        nesciunt beatae at ipsa, ducimus dolorum. Magnam ducimus voluptatibus
        velit temporibus!
      </p>
    </div>
  );
}

export default Intro;
