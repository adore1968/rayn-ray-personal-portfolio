/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function PostCard({ value }) {
  return (
    <div className="sm:text-left text-center">
      <div className="overflow-hidden">
        <img
          src={value.imageUrl}
          alt={value.title}
          className="hover:scale-125 transition-transform ease-in"
        />
      </div>
      <div className="bg-gray-950 text-gray-50 p-5">
        <h4 className="sm:text-xl mb-1 text-xl font-medium">{value.title}</h4>
        <p className="sm:text-xl mb-5 text-lg text-gray-200">
          {value.description}
        </p>
        <Link
          href={`/blog/post?title=${value.title}`}
          className="sm:text-xl hover:bg-blue-500 inline-block px-4 py-2 text-lg transition-colors ease-in bg-blue-600 rounded"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
