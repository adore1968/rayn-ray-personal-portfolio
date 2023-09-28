import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-950 text-gray-50 flex items-center justify-between px-12 py-5">
      <h1 className="sm:text-2xl text-xl font-semibold">
        <Link href="/">Simple Portfolio</Link>
      </h1>
      <ul className="sm:text-xl flex items-center gap-10 text-lg text-gray-300">
        <li>
          <Link
            href="/blog"
            className="hover:text-gray-50 transition-colors ease-in"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/github"
            className="hover:text-gray-50 transition-colors ease-in"
          >
            Github
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
