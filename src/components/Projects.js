const projects = [
  {
    title: "FinTech Dashboard",
    description: "A web app for financial data visualization using React and Spring Boot.",
    tech: "React, Spring Boot, MySQL",
    link: "#"
  },
  {
    title: "Blog Platform",
    description: "A blogging platform I built for sharing tutorials and guides.",
    tech: "Next.js, Tailwind CSS",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p.title} className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="mt-2">{p.description}</p>
            <p className="mt-1 text-sm text-gray-500">Tech: {p.tech}</p>
            <a href={p.link} className="mt-3 inline-block text-indigo-600 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
