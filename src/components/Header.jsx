import Image from "next/image";
import profilePic from "../../public/ryan-ray-profile2.jpeg";
import Link from "next/link";

function Header() {
  return (
    <header className="mb-5">
      <div className="text-gray-50 sm:flex-row flex flex-col gap-5 p-5 bg-gray-900">
        <div className="flex-auto w-full sm:w-[30%]">
          <Image
            src={profilePic}
            width="auto"
            height="auto"
            alt="ryan-ray"
            className="rounded"
          />
        </div>
        <div className="w-full sm:w-[60%] text-center sm:text-left">
          <h2 className="sm:text-4xl mb-2 text-3xl font-bold">Rayn Ray</h2>
          <h3 className="sm:text-2xl text-xl font-medium">
            FullStack Developer
          </h3>
          <p className="sm:text-xl mt-1 text-lg text-gray-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            laudantium, alias ducimus, sint perspiciatis modi sed incidunt
            veniam ipsa illum corporis tempora, commodi fugit. Illo aut animi
            non consequuntur delectus!
          </p>
          <Link
            href="#"
            className="sm:text-xl hover:bg-blue-500 inline-block px-4 py-2 mt-5 text-lg transition-colors ease-in bg-blue-600 rounded"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
