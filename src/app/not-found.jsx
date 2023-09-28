import Link from "next/link";

function NotFoundPage() {
  return (
    <section className="flex justify-center mb-12">
      <div className="text-center">
        <h1 className="sm:text-4xl mb-5 text-3xl font-bold">
          Error 404, page not found
        </h1>
        <Link
          href="/"
          className="sm:text-xl hover:bg-blue-500 text-gray-50 w-fit block px-4 py-2 mx-auto text-lg transition-colors ease-in bg-blue-600 rounded"
        >
          Go back to home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
