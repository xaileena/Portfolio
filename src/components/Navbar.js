import Pdf from "../assets/Aileena_s_Resume.pdf";
import { CursorClickIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <header className="bg-[#e2619f] sm:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center mb-4 py-7">
        <a className="flex flex-wrap justify-center title-font font-medium text-[#b3446c] transition duration-300 ease-in-out hover:scale-110">
          <a href="#about" className="ml-3 text-2xl font-agbalumo hover:text-pink-200">
            Aileena Xie
            <CursorClickIcon className="mr-auto inline-block w-10 mb-4 pl-2" />
          </a>
        </a>
        <nav className="flex flex-wrap justify-center md:justify-end md:flex-grow md:ml-4 md:py-1 md:pl-4 font-sansserif">
        <a href = {Pdf} target = "_blank" className="md:ml-10 hover:text-pink-200 text-2xl font-bold transition duration-300 ease-in-out hover:scale-110">
            Resume
          </a>
          <a href="#projects" className="hidden sm:block ml-10 hover:text-pink-200 text-2xl font-bold transition duration-300 ease-in-out hover:scale-110">
            Projects
          </a>
          <a href="#skills" className="hidden sm:block ml-10 hover:text-pink-200 text-2xl font-bold transition duration-300 ease-in-out hover:scale-110">
            Skills
          </a>
        </nav>
      </div>
    </header>
  );
}