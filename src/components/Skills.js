import { skills } from "../utils/data";
import { BadgeCheckIcon, CodeIcon} from "@heroicons/react/outline";

export default function Skills() {
    return (
      <section id="skills">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20 my-16">
          <CodeIcon className="w-10 inline-block mb-4 text-pink-500" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-pink-500 mb-4 font-sansserif">
              Skills &amp; Technologies
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full font-serif">
                <div className="bg-[#e2619f] rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-[#fee2f0] w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-[#fee2f0]">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center my-16">
          <h2 className="sm:text-4xl text- font-small title-font text-pink-500 mb-4 font-sansserif">
            And more!
         </h2>
          </div>
        </div>
      </section>
    );
  }