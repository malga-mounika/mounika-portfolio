import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white"
        >
          Mounika<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-slate-300 transition hover:text-indigo-400"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/Mounika-Malga-Resume.pdf"
            download
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-700 p-2 text-white md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">

            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-indigo-400"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/Mounika-Malga-Resume.pdf"
              download
              className="flex w-fit items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white"
            >
              <Download size={16} />
              Resume
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
