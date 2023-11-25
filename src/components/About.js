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
                    I am a sophomore at McGill University pursuing a
                    bachelor's in computer science. What pushed me to pursue my studies
                    in this field is my deep admiration for the achievements of women in the tech
                    industry. I have a passion for software development and I am actively
                    seeking internship opportunities. Through my studies,
                    personal projects, and experiences, I strive to continuously expand my knowledge,
                    creativity and technical skills.
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