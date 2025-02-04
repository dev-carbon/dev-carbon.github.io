import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa6";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="max-w-7xl mx-auto px-12 py-6 flex items-center justify-between gap-8">
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/dev-carbon"
          className="text-2xl"
          target="_blank"
        >
          <FaGithub />
        </a>

        <a href="https://discord.gg/vvXXndYuvr" className="text-2xl">
          <FaDiscord />
        </a>
      </div>

      <div className="navbar-right">
        <div className="flex items-center gap-1">
          <div>
            <Sun size={24} />
          </div>

          <button
            onClick={toggleTheme}
            className="flex items-center rounded-full bg-neutral-600 w-10 h-6 p-1 cursor-pointer"
            aria-label="Toggle Theme"
          >
            <div className="toggle-circle w-4 h-4 rounded-full bg-white"></div>
          </button>

          <div>
            <Moon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
