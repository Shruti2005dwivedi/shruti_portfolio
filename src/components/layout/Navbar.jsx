export default function Navbar() {
  return (
    <nav className="fixed top-10 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2">

      <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-10 py-5 backdrop-blur-xl">

        <h1 className="text-3xl font-bold text-cyan-400">
          Shruti
        </h1>

        <ul className="flex gap-12 text-lg text-slate-300">
          <li>About</li>
          <li>Projects</li>
          <li>Leadership</li>
          <li>Contact</li>
        </ul>

      </div>

    </nav>
  );
}
