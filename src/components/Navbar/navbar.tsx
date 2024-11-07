import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useTheme } from "../theme-provider";
import "./navbar.scss";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    setCurrentTheme(localStorage.getItem("vite-ui-theme") ?? "light");
  });

  function handleThemeChange() {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }

  return (
    <nav className="p-4 flex justify-between items-center sticky top-0 md:px-12">
      <h1 className="text-2xl font-bold">Quan Dang</h1>
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex gap-4 absolute md:static bg-background md:bg-transparent left-0 right-0 top-16 p-4 md:p-0`}
      >
        <li>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#skill" className="hover:text-primary transition-colors">
            Skills
          </a>
        </li>
        <li>
          <a href="#project" className="hover:text-primary transition-colors">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </li>
        <li className="extra-nav">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" onClick={() => handleThemeChange()} />{" "}
            <Label htmlFor="airplane-mode" className="capitalize">
              {currentTheme} Mode{" "}
            </Label>{" "}
          </div>{" "}
        </li>
      </ul>
    </nav>

    // <header className="bg-[--border]">
    //   <div className="logo">
    //     {/* <img src=".//assets/logo.png" alt="logo" /> */}
    //     <a href="/">Quan Dang</a>
    //   </div>

    //   <nav>
    //     <a href="#home">Home</a>
    //     <a href="#about">About</a>
    //     <a href="#skill">Skill</a>
    //     <a href="#project">Project</a>
    //     <a href="#contact">Contact</a>
    //   </nav>

    //   <div className="extra-nav">
    //     <div className="flex items-center space-x-2">
    //       <Switch id="airplane-mode" onClick={() => handleThemeChange()} />
    //       <Label htmlFor="airplane-mode" className="capitalize">
    //         {currentTheme} Mode
    //       </Label>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Navbar;
