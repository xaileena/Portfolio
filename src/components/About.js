import memoji from "../assets/memoji.png";
import { TypeWriter } from "./Typewriter";


export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 
                flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-500 font-monospace">
                        Hello, I'm Leena.   
                        <br className="hidden lg:inline-block" /> 
                        <h2 className="title-font sm:text-3xl mb-4 font-medium text-pink-500 font-monospace"> <TypeWriter/>
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
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-20">
                    <img
                        className="object-cover object-center rounded mb-5"
                        alt="me"
                        src={memoji}
                    />
                    <p className="text-pink-500 font-agbalumo text-xl text-center mr-20">She / Her</p>
                </div>
            </div>
        </section>
    )
}