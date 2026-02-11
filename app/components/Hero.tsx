export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 min-h-[80vh] bg-[var(--color-secondary)] flex items-center px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-serif text-[var(--color-primary)] mb-6">
            Trauma & Anxiety Therapy in Chicago
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Compassionate, evidence-based therapy helping adults and couples
            heal, grow, and build emotional resilience.
          </p>

          <button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-md hover:bg-[var(--color-accent)] transition duration-300">
            Schedule a Consultation
          </button>
        </div>

        <div>
          <img
            src="/images/maya.jpg"
            alt="Dr. Maya Reynolds"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
