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
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Blog</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">A place to share my thoughts and ideas.</p>
      <div className="space-y-8">
        {SAMPLE_POSTS.map((post) => (
          <article key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{post.title}</h2>
            <p className="text-sm mb-4 text-gray-500 dark:text-gray-400">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
            <a 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 font-medium"
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog; 