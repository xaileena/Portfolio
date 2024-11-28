import memoji from "../assets/memoji.png";
import { TypeWriter } from "./Typewriter";


export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-5 flex-col items-center lg:flex-row">
                <div className="lg:mt-12 xl:mt-0 lg:w-1/2 lg:pr-24 flex-grow flex flex-col mb-0 items-center text-justify sm:items-start sm:text-left">

                    <h1 className="title-font lg:text-4xl text-3xl mb-4 font-medium text-pink-500 font-monospace">
                        Hello, I'm Leena.   
                        <br/> 
                        <h2 className="title-font text-2xl mb-4 font-medium text-pink-500 font-monospace"> <TypeWriter/>
                        </h2>
                    </h1>
                    <p className="mb-8 leading-relaxed font-serif text-pink-500 text-lg">
                    I am a third year computer science student at McGill University. My interest in software development as well
                    as my deep admiration for the achievements of women in the tech industry
                    have been a driving force in my professional and academic journey.
                    My work experience has been primarily full-stack development with Spring, React, and Angular.
                    </p>
                </div>
                <div className="lg:max-w-lg lg:w-full w-5/6 pb-20 md:flex md:flex-col md:items-center md:justify-center">
                    <img
                        className="object-cover object-center rounded mb-5"
                        alt="me"
                        src={memoji}
                    />
                    <p className="text-pink-500 font-agbalumo text-xl text-center">She / Her</p>
                </div>
            </div>
        </section>
    )
}