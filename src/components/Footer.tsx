import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8 sm:py-12 overflow-hidden w-full max-w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl w-full">
        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mb-6 sm:mb-8">
          <a href="#home" className="text-background/70 hover:text-background transition-colors text-sm">
            Home
          </a>
          <a href="#services" className="text-background/70 hover:text-background transition-colors text-sm">
            Services
          </a>
          <a href="#gallery" className="text-background/70 hover:text-background transition-colors text-sm">
            Gallery
          </a>
          <a href="#about" className="text-background/70 hover:text-background transition-colors text-sm">
            About
          </a>
          <a href="#contact" className="text-background/70 hover:text-background transition-colors text-sm">
            Contact
          </a>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 sm:gap-8">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="bg-background rounded-lg p-2">
              <img src={logo} alt="Opulent Auto Trimming" className="h-10 w-auto" />
            </div>
          </div>

          {/* Coded by lunexweb - centered on desktop */}
          <div className="text-background/70 text-sm text-center hidden md:block">
            Coded by{" "}
            <a 
              href="https://www.lunexweb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background hover:text-background transition-colors underline"
            >
              lunexweb
            </a>
          </div>

          {/* Copyright */}
          <div className="text-background/50 text-sm text-center md:text-right">
            <div>© {currentYear} Opulent. All rights reserved.</div>
            <div className="mt-1 md:hidden">
              Coded by{" "}
              <a 
                href="https://www.lunexweb.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors underline"
              >
                lunexweb
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
