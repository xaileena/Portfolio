import Pdf from "../assets/Aileena_s_Resume.pdf";
import { CursorClickIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <header className="bg-[#e2619f] md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-[#b3446c] mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-2xl font-agbalumo hover:text-white">
            Aileena Xie
          </a>
        </a>
        <nav className="md:flex-grow md:ml-4 md:py-1 md:pl-4 md:border-l md:border-[#b3446c]	flex flex-wrap items-center text-base justify-end font-sansserif">
        <CursorClickIcon className="mr-auto inline-block w-10 mb-4"/>
        <a href = {Pdf} target = "_blank" className="ml-10 hover:text-white text-2xl font-bold">
            Resume
          </a>
          <a href="#projects" className="ml-10 hover:text-white text-2xl font-bold">
            Projects
          </a>
          <a href="#skills" className="ml-10 hover:text-white text-2xl font-bold">
            Skills
          </a>
        </nav>
      </div>
    </header>
  );
}