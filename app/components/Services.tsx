export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif text-[var(--color-primary)]">
          Areas of Specialization
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="p-8 bg-[var(--color-secondary)] rounded-lg">
          <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-4">
            Trauma Therapy
          </h3>
          <p>
            Supporting individuals in processing and healing from traumatic
            experiences.
          </p>
        </div>

        <div className="p-8 bg-[var(--color-secondary)] rounded-lg">
          <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-4">
            Anxiety Treatment
          </h3>
          <p>
            Helping clients manage overwhelming thoughts and build coping
            strategies.
          </p>
        </div>

        <div className="p-8 bg-[var(--color-secondary)] rounded-lg">
          <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-4">
            Couples Counseling
          </h3>
          <p>
            Improving communication, trust, and emotional connection in
            relationships.
          </p>
        </div>
      </div>
    </section>
  );
}
