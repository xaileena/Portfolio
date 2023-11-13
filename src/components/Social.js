import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export default function Social() {
    return (
        <section id="social">
                <div className="flex-column text-center bg-white w-1/2 mx-auto py-10 my-20   rounded-full">
                    <h3>
                        Let's connect!
                    </h3>
                    <div className="flex items-center justify-center mt-5">
                        <a href="https://github.com/xaileena" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faSquareGithub} size="6x"className="w-14  inline-block ml-20 mr-16"/>
                        </a>
                        <a href="https://www.linkedin.com/in/aileena-xie/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="6x" className="w-14 inline-block ml-20 mr-16"/>
                        </a>
                        <a href="mailto:aileenaxie@gmail.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} size="6x" className="w-14     inline-block ml-20 mr-16"/>
                        </a>
                    </div>
            </div>
        </section>
    )
}