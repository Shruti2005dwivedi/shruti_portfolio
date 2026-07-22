export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50
    w-[92%] max-w-6xl
    rounded-full
    border border-white/10
    bg-white/5
    backdrop-blur-xl">

      <div className="flex items-center justify-between px-8 py-4">

        <h1 className="text-cyan-400 font-bold text-2xl">
          Shruti
        </h1>

        <div className="flex gap-8 text-gray-300">

          <a href="#">About</a>

          <a href="#">Projects</a>

          <a href="#">Leadership</a>

          <a href="#">Contact</a>

        </div>

      </div>

    </nav>
  )
}
