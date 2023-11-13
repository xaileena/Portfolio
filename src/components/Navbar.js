import Pdf from "../assets/Aileena_s_Resume.pdf";
import { CursorClickIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <header className="bg-pink-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-pink mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Leena Xie
          </a>
        </a>
        <nav className="md:flex-grow md:ml-4 md:py-1 md:pl-4 md:border-l md:border-pink-700	flex flex-wrap items-center text-base justify-end">
        <CursorClickIcon className="mr-auto inline-block w-10 mb-4"/>
        <a href = {Pdf} target = "_blank" className="mr-5 hover:text-white">
            Resume
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
      </div>
    </header>
  );
}