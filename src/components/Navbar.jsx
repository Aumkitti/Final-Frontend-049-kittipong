import { useState, useEffect } from "react";

const Navbar= () => {
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Popular", href: "#popular", id: "popular" },
    { name: "Review", href: "#review", id: "review" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    links.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-secondary text-primary z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold italic text-accent text-white">
            TechZone
          </a>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`hover:text-accent transition-colors ${
                  activeLink === link.id ? "text-accent" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
