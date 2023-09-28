import PostCard from "@/components/PostCard";
import { posts } from "@/data/data";

function BlogPage() {
  return (
    <section className="mb-12">
      <h1 className="sm:text-4xl mb-5 text-3xl font-bold text-center">
        My Blog
      </h1>
      <div className="md:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-5">
        {posts.map((value, index) => (
          <PostCard key={index} value={value} />
        ))}
      </div>
    </section>
  );
}

export default BlogPage;
