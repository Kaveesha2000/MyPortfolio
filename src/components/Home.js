import profileImage from "../assets/Profilepic.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center
                 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m <span className="text-blue-400">Kaveesha Sanduni</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-2xl">
            Associate Software Engineer & Technical Blogger focused on
            building scalable, enterprise-grade applications.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white font-semibold
                         rounded-md shadow hover:bg-blue-700 transition"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-slate-400 text-slate-100
                         font-semibold rounded-md hover:bg-slate-700 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="Kaveesha Sanduni"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full
                       object-cover border-4 border-slate-600 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
