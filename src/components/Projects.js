const projects = [
  {
    title: "PayTect – Card Management System",
    period: "July 2023 – July 2025",
    clients: "DFCC, DF, UNION BANK",
    tech: "Oracle, Spring Boot, Java 11, MySQL, React",
    description:
      "Developed a comprehensive card management solution for banking clients, focusing on scalability, security, and high availability.",
  },
  {
    title: "PayTect – API Platform",
    period: "November 2023 – July 2025",
    clients: "DFCC, DF, UNION BANK",
    tech: "Spring Boot, MongoDB",
    description:
      "Built a secure third-party API platform to enhance card management system integrations and improve system security.",
  },
  {
    title: "Kasi Wasi – Loyalty Point Redeemable System",
    period: "July 2025 – November 2025",
    clients: "Partner Merchants",
    tech: "Spring Boot, React, Oracle",
    description:
      "Developed a customer loyalty platform enabling point accumulation and redemption across multiple partner merchants.",
  },
  {
    title: "E-Statement for Credit Cards",
    period: "March 2025 – July 2025",
    clients: "DFCC, UNION BANK",
    tech: "Spring Boot, MySQL, HTML, CSS, JavaScript, Thymeleaf",
    description:
      "Implemented a comprehensive e-statement system for credit card activities, improving transparency and customer accessibility.",
  },
  {
    title: "Quotation System – Life Insurance",
    period: "November 2025 – Present",
    clients: "Life Insurance Domain",
    tech: "Spring Boot, Hibernate, Angular, MySQL",
    description:
      "Developed a life insurance quotation system supporting proposal creation and premium calculations. Built backend business logic and service layers using Spring Boot and Hibernate, implemented Angular-based dynamic forms with validations, and integrated REST APIs for seamless data flow between frontend and backend.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          My <span className="text-blue-600">Projects</span>
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-blue-600 mb-10 rounded"></div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-md p-8
                         hover:shadow-lg transition duration-300"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-slate-900">
                {project.title}
              </h3>

              {/* Period */}
              <p className="mt-1 text-sm text-slate-500">{project.period}</p>

              {/* Description */}
              <p className="mt-4 text-slate-700 leading-relaxed">
                {project.description}
              </p>

              {/* Clients */}
              <p className="mt-4 text-sm text-slate-600">
                <span className="font-medium">Clients:</span> {project.clients}
              </p>

              {/* Tech Stack */}
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-medium">Technologies:</span>{" "}
                <span className="text-blue-600">{project.tech}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
