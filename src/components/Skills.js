export default function Skills() {
  const skills = ["Java", "Spring Boot", "React", "Next.js", "Go", "JavaScript", "MySQL", "Docker", "Git"];
  return (
    <section id="skills" className="py-20 px-6">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-2 bg-indigo-500 text-white rounded">{skill}</span>
        ))}
      </div>
    </section>
  );
}
