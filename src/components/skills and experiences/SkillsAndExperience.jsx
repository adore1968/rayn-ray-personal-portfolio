import { skills, experiences } from "@/data/data";
import SkillComponent from "./SkillComponent";
import ExperienceComponent from "./ExperienceComponent";

function SkillsAndExperience() {
  return (
    <section className="mb-5">
      <div className="sm:flex-row flex flex-col gap-5">
        <div className="flex-auto sm:w-[30%] w-full border p-5">
          <h3 className="sm:text-3xl mb-5 text-2xl font-semibold">Skills</h3>
          <div className="flex flex-col gap-5">
            {skills.map((value, index) => (
              <SkillComponent key={index} value={value} />
            ))}
          </div>
        </div>
        <div className="flex-auto text-center sm:text-left sm:w-[60%] border p-5 w-full">
          <h3 className="sm:text-3xl mb-2.5 text-2xl font-semibold">
            Experience
          </h3>
          <ul className="flex flex-col gap-5">
            {experiences.map((value, index) => (
              <ExperienceComponent key={index} value={value} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillsAndExperience;
