export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          About <span className="text-blue-600">Me</span>
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-blue-600 mb-8 rounded"></div>

        {/* Content Card */}
        <div
          className="bg-white rounded-2xl shadow-md
                     p-8 md:p-10
                     hover:shadow-lg transition duration-300"
        >
          <p className="text-lg leading-relaxed text-slate-700">
            I’m an{" "}
            <span className="font-semibold text-slate-900">
              Associate Software Engineer
            </span>{" "}
            with hands-on experience in building scalable and maintainable web
            applications using{" "}
            <span className="font-semibold">
              Java, Spring Boot, Angular, and React
            </span>.
          </p>

          <p className="text-lg leading-relaxed text-slate-700 mt-4">
            Alongside my engineering work, I’m also a{" "}
            <span className="font-semibold text-blue-600">
              technical blogger and instructor
            </span>
            , passionate about sharing knowledge through clear tutorials and
            practical guides to help others grow in software development.
          </p>
        </div>
      </div>
    </section>
  );
}