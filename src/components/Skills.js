export default function Skills() {
  const skills = [
    "Java",
    "JavaScript",
    "TypeScript",
    "Spring Boot",
    "Spring MVC",
    "Hibernate",
    "JPA",
    "RESTful API Development",
    "OAuth 2",
    "React",
    "Angular",
    "HTML/CSS",
    "Go",
    "MySQL",
    "Oracle",
    "MongoDB",
    "PostgreSQL",
    "Docker (Basic)",
    "Git",
    "Maven",
    "Swagger (OpenAPI)",
    "SonarQube",
    "Microservice Architecture", 
    "MVC Architecture", 
    "Layered Architecture", 
    "Client Server Architecture"
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          My <span className="text-blue-600">Skills</span>
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-blue-600 mb-8 rounded"></div>

        {/* Skills Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 hover:shadow-lg transition duration-300">
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 bg-blue-100 text-blue-800
                           font-medium rounded-full
                           hover:bg-blue-600 hover:text-white
                           transition duration-200 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
