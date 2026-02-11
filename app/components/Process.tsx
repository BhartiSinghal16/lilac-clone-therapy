export default function Process() {
  return (
    <section
      id="process"
      className="p-8 bg-[var(--color-secondary)] rounded-lg text-center
transition-all duration-300 ease-in-out
hover:bg-white
hover:shadow-xl
hover:-translate-y-1"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif text-[var(--color-primary)] mb-4">
          How Therapy Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A supportive, structured process designed to help you feel safe,
          understood, and empowered.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="p-8 bg-[var(--color-secondary)] rounded-lg text-center">
          <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-4">
            01. Initial Consultation
          </h3>
          <p className="text-gray-700">
            We begin with a conversation to understand your concerns, goals, and
            personal history.
          </p>
        </div>

        <div className="p-8 bg-[var(--color-secondary)] rounded-lg text-center">
          <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-4">
            02. Personalized Plan
          </h3>
          <p className="text-gray-700">
            Together, we develop a therapy plan tailored to your unique needs
            and experiences.
          </p>
        </div>

        <div className="p-8 bg-[var(--color-secondary)] rounded-lg text-center">
          <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-4">
            03. Ongoing Growth
          </h3>
          <p className="text-gray-700">
            Through regular sessions, we build coping skills, emotional insight,
            and lasting change.
          </p>
        </div>
      </div>
    </section>
  );
}
