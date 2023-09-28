import Link from "next/link";

function ExperienceComponent({ value }) {
  return (
    <li className="sm:text-xl last-of-type:border-b-0 pb-5 text-lg text-gray-800 border-b">
      <h4 className="sm:text-xl text-gray-950 mb-2 text-xl font-medium">
        {value.title}
      </h4>
      <span className="block mb-1">
        {value.from}-{value.to ? value.to : new Date().getFullYear()}
      </span>
      <p className="mb-5">{value.description}</p>
      <Link
        href="#"
        className="sm:text-xl hover:bg-blue-500 text-gray-50 inline-block px-4 py-2 text-lg transition-colors ease-in bg-blue-600 rounded"
      >
        Hire Me
      </Link>
    </li>
  );
}

export default ExperienceComponent;
