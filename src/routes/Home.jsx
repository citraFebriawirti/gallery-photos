import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
      <div className="my-16 px-5 flex flex-wrap ">
      <aside className="w-full self-center px-5 lg:w-1/2">
        <h1 className="text-4xl text-[#213644]
        font-bold lg:text-6xl md:text-5xl">
          Gallery Photos
        </h1>
        <p className="font-normal text-gray-400 mb-5 leading-relaxed text-xs md:text-base lg:text-xl lg:mt-3 ">
          App for all photos that are arranged automatically
        </p>
        <Link to="/add"
          className="text-base font-semibold text-white bg-[#C6AB7C] py-2 px-6 rounded-full hover:shadow-lg hover:opacity-80 transition duration-150">
          Get Started
        </Link>
      </aside>
      <aside className="w-full self-end px-5 my-3 lg:w-1/2 ">
        <div className="mt-9">
          <img
            src="../image/content/header.svg "
            className="max-w-full mx-auto"
            alt="foto Citra"/>
        </div>
      </aside>
      </div>

     <footer className=" container bg-white  dark:bg-gray-900 text-center">
    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/"> Citra Febriawirti</a>|| 201100032
        </span>
        <div className="flex mt-4 space-x-6 justify-center sm:justify-center md:mt-0">
            <a href="https://github.com/citraFebriawirti" className="text-gray-400  hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                <span className="sr-only">GitHub account</span>
            </a>
            <a href="https://www.linkedin.com/in/citra-febriawirti/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>
                <span className="sr-only">Linkind</span>
            </a>
        </div>
    </div>
     </footer>
      </div>
    

    </>
  );
};

export default Home;
