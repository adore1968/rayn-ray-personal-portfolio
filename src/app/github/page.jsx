/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";

const getUser = async () => {
  try {
    const { status, data } = await axios(
      "https://api.github.com/users/adore1968"
    );
    if (status === 200) return data;
  } catch (error) {
    console.log(error);
  }
};

async function GithubPage() {
  const user = await getUser();

  return (
    <section className="flex justify-center mb-12">
      {user && (
        <div className="bg-gray-950 text-gray-50 p-5 text-center">
          <div className="mb-5">
            <h2 className="sm:text-4xl mb-5 text-3xl font-bold">{user.name}</h2>
            <img
              src={user.avatar_url}
              alt={user.name}
              className="rounded-full"
            />
            <p className="sm:text-xl mt-2 text-lg text-gray-200">{user.bio}</p>
          </div>
          <div className="sm:text-xl flex flex-col gap-5 text-lg text-gray-200">
            <Link
              href="#"
              className="hover:bg-blue-500 inline-block px-4 py-2 transition-colors ease-in bg-blue-600 rounded"
            >
              My blog
            </Link>
            <Link
              href={user.html_url}
              className="hover:bg-blue-500 inline-block px-4 py-2 transition-colors ease-in bg-blue-600 rounded"
              target="_blank"
            >
              Go to Github
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default GithubPage;
