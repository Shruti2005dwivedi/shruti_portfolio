import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-8 z-50 w-[92%] max-w-7xl -translate-x-1/2">

      <div
        className="flex items-center justify-between rounded-full border border-white/5 px-10 py-5 backdrop-blur-2xl"
        style={{
          background: "rgba(29,24,19,.88)",
        }}
      >
        <div className="leading-none">
  <h1 className="font-mono text-2xl tracking-widest text-[#D2B48C]">
  @sierra_delta
</h1>
</div>

        <ul className="hidden gap-10 text-[17px] font-medium lg:flex">
          {[
            "home",
            "about",
            "projects",
            "leadership",
            "beyond-tech",
            "contact",
          ].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth
                spy
                duration={600}
                offset={-80}
                activeClass="text-[#B88952]"
                className="cursor-pointer capitalize text-slate-300 transition-all duration-300 hover:text-[#D7A96A]"
              >
                {item.replace("-", " ")}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}
