import { projects } from "../utils/data";
import { LightBulbIcon } from "@heroicons/react/outline";


export default function Projects() {
    return (
        <section id="projects" className="text-pink-500 bg-pink-200 pt-20">
            <div className="container px-5 py-5 mx-auto text-center lg:px-40 ">
                <div className="flex flex-col w-full mb-20">
                <LightBulbIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-pink font-sansserif">
                        My Projects
                    </h1>
                </div>

                <div className="flex flex-wrap -m-4 text-[#fee2f0]">

                    {projects.map((project) => (
                        <a
                        href={project.link} target="_blank" rel="noreferrer"
                        key={project.image}
                        className="sm:w-3/3 p-3">

                            <div className="flex relative duration-300 ease-in-out hover:scale-105">
                                <img alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center opacity-80 rounded-lg"
                                src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-pink-100 bg-[#e2619f] rounded-lg
                                opacity-0 hover:opacity-100">
                                    <h2 className="tracking-midwest text-sm title-font font-serif text-pink-200] mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-agbalumo text-pink mb-3">
                                         {project.title}
                                    </h1>
                                    <p className="leading-relaxed font-serif">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}