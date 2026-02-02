const blogs = [
  { title: "Learn Spring Boot in 7 Days", link: "#" },
  { title: "React Tips and Tricks", link: "#" },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6">
      <h2 className="text-4xl font-bold mb-6">Latest Blogs</h2>
      <ul className="space-y-4">
        {blogs.map(b => (
          <li key={b.title}>
            <a href={b.link} className="text-indigo-600 hover:underline">{b.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
