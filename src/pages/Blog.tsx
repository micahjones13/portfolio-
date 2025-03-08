interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

const SAMPLE_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Styling an Input Range to Have Different Track Heights Before and After the Thumb",
    excerpt: "A guide to styling an input range to have different track heights before and after the thumb.",
    date: "2022-04-18",
    link: "https://medium.com/astrouxds/styling-an-input-range-to-have-different-track-heights-before-and-after-the-thumb-a03975d15bd0"
  },
];

const Blog = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <p className="text-gray-400 mb-8">A place to share my thoughts and ideas.</p>
      <div className="space-y-8">
        {SAMPLE_POSTS.map((post) => (
          <article key={post.id} className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-white">{post.excerpt}</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
              <a href={post.link} target="_blank" rel="noopener noreferrer">Read more →</a>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog; 