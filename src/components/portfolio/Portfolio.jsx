import { projects } from "@/data/data";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

function Portfolio() {
  return (
    <section className="bg-gray-950 text-gray-50 p-5 mb-5">
      <h3 className="sm:text-3xl text-2xl font-semibold text-center mb-2.5">
        Portfolio
      </h3>
      <div className="md:grid-cols-3 sm:grid-cols-2 sm:text-left grid grid-cols-1 gap-2 text-center">
        {projects.map((value, index) => (
          <ProjectCard key={index} value={value} />
        ))}
      </div>
      <Link
        href="#"
        className="sm:text-xl hover:bg-blue-500 w-fit block px-4 py-2 mx-auto mt-5 text-lg transition-colors ease-in bg-blue-600 rounded"
      >
        More projects
      </Link>
    </section>
  );
}

export default Portfolio;
