export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
      <h1 className="text-5xl font-bold">Hi, I’m Kaveesha</h1>
      <p className="mt-4 text-xl">Associate Software Engineer & Technical Blogger</p>
      <div className="mt-6 space-x-4">
        <a href="#projects" className="px-6 py-3 bg-white text-indigo-600 rounded hover:bg-gray-100 transition">See My Work</a>
        <a href="#contact" className="px-6 py-3 border border-white rounded hover:bg-white hover:text-indigo-600 transition">Contact Me</a>
      </div>
    </section>
  );
}
