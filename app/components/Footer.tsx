export default function Footer() {
  return (
    <footer className="bg-white border-t py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        
        <div className="font-serif text-[var(--color-primary)] text-lg">
          Dr. Maya Reynolds
        </div>

        <div className="flex gap-6 uppercase tracking-widest text-[var(--color-primary)]">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <div>
          © {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

