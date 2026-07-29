import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-8 z-50 w-[92%] max-w-7xl -translate-x-1/2">

      <div
        className="flex items-center justify-between rounded-full border border-[#4A3B32]/5 px-10 py-5 backdrop-blur-2xl"
        style={{
          background:"rgba(33,27,24,.90)",
        }}
      >
        <div className="leading-none">
  <h1 className="font-mono text-2xl tracking-widest text-[#D7BA8A]">
  @sierra_delta
</h1>
</div>

        <ul className="hidden gap-10 text-[17px] font-medium lg:flex">
          {[
             "Home",
             "About",
             "Projects",
             "Journey",
             "Contact",
          ].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth
                spy
                duration={600}
                offset={-80}
                activeClass="text-[#B88952]"
                className="cursor-pointer capitalize text-[#D7BA8A] transition-all duration-300 hover:text-[#D7A96A]"
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
