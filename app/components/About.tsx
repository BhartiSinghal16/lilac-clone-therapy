export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-secondary)]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="/images/maya.jpg"
            alt="Dr. Maya Reynolds"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-4xl font-serif text-[var(--color-primary)] mb-6">
            About Dr. Maya Reynolds
          </h2>

          <p className="mb-6 text-gray-700">
            Dr. Maya Reynolds is a licensed therapist specializing in trauma,
            anxiety, and relationship counseling. Her approach is compassionate,
            client-centered, and grounded in evidence-based practices.
          </p>

          <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-md hover:bg-[var(--color-accent)] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
