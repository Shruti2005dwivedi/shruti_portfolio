import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="py-12">

      <div className="mx-auto max-w-7xl border-t border-white/5 pt-10">

        <div className="flex flex-col items-center gap-5">

          <p className="font-mono uppercase tracking-[0.3em] text-xs text-slate-500">
            ENGINEERING JOURNAL • ISSUE 01
          </p>

          <p className="text-slate-500 text-center">
            Designed & Developed by
            <span className="ml-2 text-white font-semibold">
              Shruti Dwivedi
            </span>
          </p>

          <div className="flex gap-8 text-xl">

            <a
              href="mailto:dshruti593@gmail.com"
              className="text-slate-500 transition hover:text-violet-400"
            >
              <MdEmail />
            </a>

            <a
              href="https://github.com/Shruti2005dwivedi"
              target="_blank"
              className="text-slate-500 transition hover:text-violet-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shruti-dwivedi-69aa39335"
              target="_blank"
              className="text-slate-500 transition hover:text-violet-400"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
