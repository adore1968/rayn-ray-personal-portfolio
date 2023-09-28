import Image from "next/image";
import Link from "next/link";

function ProjectCard({ value }) {
  return (
    <div>
      <div className="overflow-hidden">
        <Image
          src={value.image}
          width="auto"
          height="auto"
          alt={value.title}
          className="lg:h-[369px] hover:scale-125 transition-transform ease-in sm:h-[177px] h-auto"
        />
      </div>
      <div className="bg-gray-50 text-gray-950 p-5">
        <h4 className="sm:text-2xl mb-1 text-xl font-medium">{value.title}</h4>
        <p className="sm:text-xl mb-5 text-lg text-gray-800">
          {value.description}
        </p>
        <Link
          href="#"
          className="sm:text-xl hover:bg-blue-500 text-gray-50 inline-block px-4 py-2 mt-5 text-lg transition-colors ease-in bg-blue-600 rounded"
        >
          Know more
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
