import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Philosophy", to: "philosophy" },
    { name: "Services", to: "services" },
    { name: "Results", to: "results" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="p-2 bg-primary rounded-lg">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-bold font-display tracking-tight ${scrolled ? 'text-foreground' : 'text-foreground lg:text-white'}`}>
            FIT<span className="text-primary">ALEX</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-80}
              duration={500}
              className={`text-sm font-medium cursor-pointer transition-colors ${
                scrolled 
                  ? "text-muted-foreground hover:text-primary" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="contact" smooth={true} offset={-80} duration={500}>
            <Button 
              className={scrolled ? "" : "bg-white text-primary hover:bg-white/90 border-transparent"}
              variant={scrolled ? "default" : "outline"}
            >
              Book Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={scrolled ? "" : "text-white hover:bg-white/20"}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-lg font-medium text-foreground hover:text-primary cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="contact" smooth={true} offset={-80} duration={500}>
                  <Button className="w-full">Book Consultation</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
