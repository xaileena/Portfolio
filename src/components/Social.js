import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export default function Social() {
    return (
        <section id="social">
                <div className="flex-column text-center bg-[#fee2f0] w-1/2 mx-auto py-5 my-0 rounded-full">
                    <h3 className="font-sansserif text-lg text-pink-500">
                        Let's connect!
                    </h3>
                    <div className="flex items-center justify-center mt-5">
                        <a href="https://github.com/xaileena" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faSquareGithub} size="6x"className="w-14  inline-block ml-20 mr-16 text-pink-500"/>
                        </a>
                        <a href="https://www.linkedin.com/in/aileena-xie/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="6x" className="w-14 inline-block ml-20 mr-16 text-pink-500"/>
                        </a>
                        <a href="mailto:aileenaxie@gmail.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} size="6x" className="w-14     inline-block ml-20 mr-16 text-pink-500"/>
                        </a>
                    </div>
            </div>
        </section>
    )
}