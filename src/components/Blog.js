const blogs = [
  {
    title: "Multi-Threading in Java",
    link: "https://medium.com/@kaveeshasanduni200066/multi-threading-in-java-bff6e6e526d6",
    description:
      "Multithreading can make your Java applications faster, more efficient, and scalable, if used correctly. Mastering the basics and being aware of thread safety concerns is key to writing clean, reliable multi-threaded code.",
  },
  {
    title: "Designing Complex Validation Workflows in Spring Boot",
    link: "https://medium.com/@kaveeshasanduni200066/designing-complex-validation-workflows-in-spring-boot-b8792c23798c",
    description:
      "Validation is often underestimated, but in enterprise applications, it can define the system’s reliability. A well-designed validation workflow improves code quality and system stability.",
  },
  {
    title: "How CI/CD Actually Improves Software Delivery",
    link: "https://medium.com/@kaveeshasanduni200066/how-ci-cd-actually-improves-software-delivery-344dce2ee8d6",
    description:
      "CI/CD amplifies good engineering habits by turning them into automated systems.",
  },
  {
    title: "Logs, Metrics, and Traces",
    link: "https://medium.com/@kaveeshasanduni200066/logs-metrics-and-traces-when-to-use-each-in-real-backend-systems-d235ecac21e2",
    description:
      "Logs, metrics, and traces work together to turn debugging into a structured, reliable process.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Latest <span className="text-blue-600">Blogs</span>
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-blue-600 mb-10 rounded"></div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-8 shadow-md
                         hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {blog.title}
              </h3>

              <p className="text-slate-700 leading-relaxed">
                {blog.description}
              </p>

              <span className="inline-block mt-6 text-blue-600 font-semibold">
                Read Article →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
