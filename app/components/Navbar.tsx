export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 md:py-6 px-4 sm:px-6">
        
        <h1 className="text-lg md:text-xl font-serif text-[var(--color-primary)]">
          Dr. Maya Reynolds
        </h1>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[var(--color-primary)]">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}



