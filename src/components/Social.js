import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export default function Social() {
    return (
        <section id="social">
                <div className="w-3/4 lg:w-1/2 text-center bg-[#fee2f0] mx-auto py-5 lg:py-8 my-0 rounded-full">
                    <h3 className="lg:mb-8 font-sansserif text-lg text-pink-500 animate-bounce h-2">
                        Let's connect!
                    </h3>
                    <div className="flex items-center justify-center mt-5 space-x-16 sm:space-x-32 lg:space-x-1">
                        <a href="https://github.com/xaileena" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="3x" className="sm:text-5xl lg:text-7xl lg:w-14 lg:ml-20 lg:mr-16 inline-block text-pink-500 transition duration-300 ease-in-out hover:scale-110"/>
                        </a>
                        <a href="https://www.linkedin.com/in/aileena-xie/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} size="3x" className="sm:text-5xl lg:text-7xl lg:w-14 lg:ml-20 lg:mr-16 inline-block text-pink-500 transition duration-300 ease-in-out hover:scale-110"/>
                        </a>
                        <a href="mailto:aileenaxie@gmail.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} size="3x" className="sm:text-5xl lg:text-7xl lg:w-14 lg:ml-20 lg:mr-16 inline-block text-pink-500 transition duration-300 ease-in-out hover:scale-110"/>
                        </a>
                    </div>
            </div>
        </section>
    )
}