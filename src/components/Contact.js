export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Get In <span className="text-blue-600">Touch</span>
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-blue-600 mb-10 rounded"></div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 hover:shadow-lg transition">
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            I’m always open to discussing new opportunities, collaborations,
            or sharing knowledge. Feel free to reach out through any of the
            platforms below.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div>
              <span className="block text-sm text-slate-500">Email</span>
              <a
                href="mailto:kaveeshasanduni200066@gmail.com"
                className="text-blue-600 font-semibold hover:underline"
              >
                kaveeshasanduni200066@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div>
              <span className="block text-sm text-slate-500">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/kaveesha-sanduni-358561201/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                linkedin.com/in/kaveesha-sanduni-358561201
              </a>
            </div>

            {/* GitHub */}
            <div>
              <span className="block text-sm text-slate-500">GitHub</span>
              <a
                href="https://github.com/Kaveesha2000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                github.com/Kaveesha2000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
