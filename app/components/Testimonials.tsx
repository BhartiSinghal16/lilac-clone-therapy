export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-secondary)]"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif text-[var(--color-primary)]">
          Client Experiences
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            “Working with Dr. Reynolds helped me process years of trauma in a safe and compassionate environment.”
          </p>
          <p className="font-semibold text-[var(--color-primary)]">
            — Former Client
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            “Her guidance completely changed how I manage anxiety and approach relationships.”
          </p>
          <p className="font-semibold text-[var(--color-primary)]">
            — Former Client
          </p>
        </div>
      </div>
    </section>
  );
}
